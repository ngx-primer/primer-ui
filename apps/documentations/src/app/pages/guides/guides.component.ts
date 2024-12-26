import { BehaviorSubject, catchError } from 'rxjs';
import { Component, OnInit, inject } from '@angular/core';

import { AppComponent } from '../../app.component';
import { AppDocsLayoutComponent } from '../../layouts/app-docs-layout/app-docs-layout.component';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../core/services/menu-service/menu-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-guides',
  imports: [CommonModule, RouterModule, AppDocsLayoutComponent],
  templateUrl: './guides.component.html',
  styleUrl: './guides.component.scss',
})
export class GuidesComponent implements OnInit {
  protected appComponent = inject(AppComponent, {
    optional: true,
  });
  appGuidesRoute = new BehaviorSubject([] as MenuItem[]);
  ngOnInit(): void {
    this.loadGuideRoutes();
  }
  protected loadGuideRoutes() {
    this.appComponent?.menuItems
      .pipe(catchError(async (e) => this.handleLoadRouteError(e)))
      .subscribe({
        next: (value) => this.handleLoadRouteSuccess(value as MenuItem[]),
      });
  }
  protected handleLoadRouteError(e: Error) {
    console.log(e);
  }
  protected handleLoadRouteSuccess(value: MenuItem[]) {
    const baseRoutes = value.filter((value) => value.path === 'guides');
    const finalRoutes = baseRoutes.map((route) => ({
      ...route,
      children: [...(route.children ?? []), ...this.dynamicRoutes],
    }));
    this.appGuidesRoute.next(finalRoutes);
  }

  public get dynamicRoutes(): MenuItem[] {
    return [
      {
        path: 'introduction',
        title: 'Introduction',
      },
      {
        path: 'overview',
        title: 'Overview',
      },
      {
        path: 'core-concept',
        title: 'Core Concept',
      },
      {
        path: 'installation',
        title: 'Installation',
      },
      {
        path: 'getting-started',
        title: 'Getting Started',
      },
      {
        path: 'configuration',
        title: 'Configuration',
      },
      {
        path: 'routing',
        title: 'Routing',
      },
      {
        path: 'state-management',
        title: 'State Management',
      },
      {
        path: 'dependency-injection',
        title: 'Dependency Injection',
      },
      {
        path: 'testing',
        title: 'Testing',
      },
      {
        path: 'deployment',
        title: 'Deployment',
      },
    ];
  }

  // TrackBy for the main items
  trackByItem(index: number, item: MenuItem): string {
    return item.path; // Use a unique property such as 'path'
  }

  // TrackBy for the child items
  trackByChild(index: number, child: MenuItem): string {
    return child.path; // Use a unique property such as 'path'
  }
}
