import { Injectable, inject } from '@angular/core';
import { Observable, forkJoin, from, map, of, switchMap } from 'rxjs';
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private router = inject(Router);

  /**
   * Recursively extracts route metadata to build a menu tree.
   * Handles both normal and lazy-loaded routes.
   */
  private extractRouterMetaData(opts: {
    routes: Routes;
    parentPath: string;
  }): Observable<MenuItem[]> {
    const { routes, parentPath } = opts;
    const menuItems: MenuItem[] = [];
    const observables: Observable<MenuItem[]>[] = [];

    routes.forEach((route) => {
      const fullPath = this.joinPaths(parentPath, route.path ?? '');

      // Process route with sideMenu metadata
      if (route.data?.['sideMenu']) {
        menuItems.push({
          path: fullPath,
          title: route.data['sideMenu'].title,
          children: [],
        });
      }

      // Handle child routes
      if (route.children) {
        const childrenParentPath = fullPath;
        observables.push(
          this.extractRouterMetaData({
            routes: route.children,
            parentPath: childrenParentPath,
          }).pipe(
            map((children) => {
              const parent = menuItems.find((item) => item.path === fullPath);
              if (parent) parent.children?.push(...children);
              return children;
            }),
          ),
        );
      }

      // Handle lazy-loaded routes
      if (route.loadChildren) {
        observables.push(
          from(Promise.resolve(route.loadChildren())).pipe(
            switchMap((moduleOrRoutes) => {
              let loadedRoutes: Routes = [];
              if (Array.isArray(moduleOrRoutes)) {
                loadedRoutes = moduleOrRoutes;
              } else if (moduleOrRoutes && 'ɵmod' in moduleOrRoutes) {
                const moduleWithRoutes = moduleOrRoutes as {
                  ɵmod: { imports: unknown[] };
                };
                loadedRoutes =
                  moduleWithRoutes.ɵmod.imports.find(Array.isArray) || [];
              }
              return this.extractRouterMetaData({
                routes: loadedRoutes,
                parentPath: fullPath,
              });
            }),
            map((children) => {
              // Find the parent menu item and add the lazy-loaded children to it
              const parent = menuItems.find((item) => item.path === fullPath);
              if (parent) {
                parent.children = [...(parent.children || []), ...children];
              } else {
                // If no parent is found, create a new menu item (fallback)
                menuItems.push({
                  path: fullPath,
                  title: route.data?.['sideMenu']?.title || 'Lazy Loaded',
                  children,
                });
              }
              return [];
            }),
          ),
        );
      }
    });

    // Check if there are any observables to forkJoin
    if (observables.length === 0) {
      return of(menuItems);
    }

    return forkJoin(observables).pipe(
      map((results) => {
        // Flatten and merge all child results into the top-level menuItems array
        return [...menuItems, ...results.flat()];
      }),
    );
  }

  /**
   * Combines and normalizes paths.
   */
  private joinPaths(parentPath: string, childPath: string): string {
    return [parentPath, childPath]
      .filter(Boolean)
      .join('/')
      .replace(/\/+/g, '/');
  }

  /**
   * Public method to get menu data from the current router configuration.
   */
  getMenuTree(): Observable<MenuItem[]> {
    const routes = this.router.config; // Root routes configuration
    return this.extractRouterMetaData({ routes, parentPath: '' });
  }
}

/**
 * Menu item interface for representing the tree structure.
 */
export interface MenuItem {
  path: string;
  title: string;
  children?: MenuItem[];
}
