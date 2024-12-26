import { BehaviorSubject, Observable, catchError } from 'rxjs';
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
  appGuidesRoute$ = new BehaviorSubject([] as MenuItem[]);
  ngOnInit(): void {
    this.loadGuideRoutes();
  }
  protected loadGuideRoutes() {
    this.appComponent?.getMenuItems()
      .pipe(catchError(async (e) => this.handleLoadRouteError(e)))
      .subscribe({
        next: (value) => this.handleLoadRouteSuccess(value as MenuItem[]),
      });
  }
  protected handleLoadRouteError(e: Error) {
    console.log(e);
  }
  protected handleLoadRouteSuccess(value: MenuItem[]) {
    // console.log(value);
    const menus = value as MenuItem[];
    console.log(menus[0].children?.filter((menu) => menu.path === 'guides') ?? []);
    
    this.appGuidesRoute$.next(menus[0].children?.filter((menu) => menu.path === 'guides') ?? []);
  }

  public get guideRoutes$(): Observable<MenuItem[]> { 
    return this.appGuidesRoute$.asObservable();
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
