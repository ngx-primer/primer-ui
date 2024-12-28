import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MenuItem, MenuService } from '../../core/services/menu-service/menu-service.service';
import { Subject, Subscription, catchError, filter, map, of, switchMap, takeUntil } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { PageContentService } from '../../core/services/page-content/page-content.service';

@Component({
  selector: 'app-content-detail',
  imports: [],
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit, OnDestroy {

  protected appActivatedRoute = inject(ActivatedRoute);
  protected appContentService = inject(PageContentService);
  protected appMenuService = inject(MenuService);
  protected pageContentSubscription: Subscription | undefined;
  protected destroy$ = new Subject<void>();
  
  ngOnInit() {
    this.initPageContent()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({})
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  protected initPageContent() {
    return this.appActivatedRoute.paramMap.pipe(
      map(params => {
        const pageSlug = params.get('pageSlug');
        const contentSlug = params.get('contentSlug');
        return ({ pageSlug, contentSlug });
      }),
      filter(({ pageSlug, contentSlug }) => pageSlug !== null && contentSlug !== null),
      switchMap(({ pageSlug, contentSlug }) => {
        this.appContentService.pageContent.next({
          pageTitle: pageSlug as string,
          pageSubtitle: contentSlug as string,
        });
        return this.appMenuService.rawMenuItems$.pipe(
          catchError((error) => {
            this.appMenuService.sideMenuItems.error(error);
            this.appMenuService.sideMenuItems.complete();
            return of({data: [], error});
          }),
          map((menuItems) => {
            const children = menuItems.data[0].children as MenuItem[];
            console.log({children});
            if(!children) {
              throw new Error('Menu items not found');
            }
            
            const sideMenuItems = children.filter(
              (child) => child.path === pageSlug
            )

            console.log({sideMenuItems});

            this.appMenuService.sideMenuItems.next([...sideMenuItems]);

            return ({contentSlug, pageSlug, sideMenuItems});
          }),
          switchMap(({contentSlug, pageSlug, sideMenuItems}) => {
            return of({contentSlug, pageSlug, sideMenuItems});
          })
        );
      })
    )
  }
}
