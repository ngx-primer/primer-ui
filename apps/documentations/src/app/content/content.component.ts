import { ActivatedRoute, RouterModule } from '@angular/router';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, Pipe, PipeTransform, TrackByFunction, inject } from '@angular/core';
import { MenuItem, MenuService } from '../core/services/menu-service/menu-service.service';
import { Subject, takeUntil } from 'rxjs';

import { AppDocsLayoutComponent } from '../layouts/app-docs-layout/app-docs-layout.component';
import { CommonModule } from '@angular/common';
import { PageContentService } from '../core/services/page-content/page-content.service';

@Pipe({
  name: 'pageTitle'
})
export class CustomTitlePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  }
}

@Component({
  selector: 'app-content',
  imports: [
    CommonModule,
    RouterModule,
    AppDocsLayoutComponent,
    CustomTitlePipe
  ],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {
  protected readonly appRouter = inject(ActivatedRoute);
  protected readonly appMenuService = inject(MenuService);
  protected readonly appPageContentService = inject(PageContentService);
  protected readonly changeDetectorRef = inject(ChangeDetectorRef);
  protected destroy$ = new Subject<void>();
  trackByItem: TrackByFunction<MenuItem> = (index, item) => item.path;
  trackByChild: TrackByFunction<MenuItem> = (index, child) => child.path;

  ngOnInit(): void {
    this.appMenuService.getAppMenus()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.appMenuService.rawMenuItems.next(data);
          this.changeDetectorRef.detectChanges();
        },
        error: (error) => {
          this.appMenuService.rawMenuItems.error(error);
          this.appMenuService.rawMenuItems.complete();
        }, 
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public get appSideMenuItems$() {
    return this.appMenuService.sideMenuItems$;
  }
}
