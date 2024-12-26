import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { GuidesComponent } from '../guides.component';
import { HttpClient } from '@angular/common/http';
import { PageContent } from '../../../core/interfaces/content.type';
import { PageContentService } from '../../../core/services/page-content/page-content.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-guide-detail',
  imports: [CommonModule],
  templateUrl: './guide-detail.component.html',
  styleUrls: ['./guide-detail.component.scss'],
})
export class GuideDetailComponent implements OnInit, OnDestroy {
  protected guidesComponent = inject(GuidesComponent, {
    optional: true,
  });
  protected titleService = inject(Title);
  protected activatedRoute = inject(ActivatedRoute);
  public slug$ = new BehaviorSubject<string>('');
  public pageTitle$ = new BehaviorSubject<string>('');
  public pageContent$ = new BehaviorSubject<PageContent>({} as PageContent);
  public pageContentError$ = new BehaviorSubject<boolean>(false);
  protected pageService = inject(PageContentService);

  ngOnInit(): void {
    this.subscribeToRouteChanges();
  }

  protected subscribeToRouteChanges() {
    this.activatedRoute.params.subscribe((params) => {
      const routeTitle = this.guidesComponent?.dynamicRoutes.find(
        (route) => route.path === params['slug'],
      )?.title;
      if (routeTitle) {
        this.initializePageMetaData(params, routeTitle);
      }
    });
  }

  protected initializePageMetaData(params: Record<string, unknown>, routeTitle: string) {
    this.slug$.next(params['slug'] as string);
    this.pageTitle$.next(routeTitle ?? 'default-title');
    let documentTitle = this.titleService.getTitle()?.split(' | ')[0];
    documentTitle = documentTitle + ' | ' + this.pageTitle$.getValue();
    this.titleService.setTitle(documentTitle);

    this.pageService.getPageData({
      page: "guides",
      params: params["slug"] as string,
    }).subscribe({
      next: (page) => {
        this.pageContent$.next(page as PageContent);
        this.pageContentError$.next(false);
      },
      error: (err) => {
        this.pageContentError$.next(true);
        throw err
      }
    });
  }

  ngOnDestroy(): void {
    if (this.slug$) {
      this.slug$.complete();
    }
    if (this.pageContent$) {
      this.pageContent$.complete();
    }
    if(this.pageTitle$) {
      this.pageTitle$.complete();
    }
    if(this.pageContentError$) {
      this.pageContentError$.complete();
    }
  }

  get pageSections() {
    return this.pageContent$
      .getValue()
      .sections?.map((section) => section)
  }
}
