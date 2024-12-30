/* eslint-disable @typescript-eslint/ban-ts-comment */
import { BehaviorSubject, Subject, catchError, filter, map, of, switchMap, takeUntil } from 'rxjs';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MenuItem, MenuService } from '../../core/services/menu-service/menu-service.service';

import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { PageContentService } from '../../core/services/page-content/page-content.service';
import parse from 'remark-parse';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified';

@Component({
  selector: 'app-content-detail',
  imports: [CommonModule],
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss'],
})
export class ContentDetailComponent implements OnInit, OnDestroy {
  protected appActivatedRoute = inject(ActivatedRoute);
  protected appContentService = inject(PageContentService);
  protected appMenuService = inject(MenuService);
  protected destroy$ = new Subject<void>();
  protected pageContent = new BehaviorSubject<string>('');
  protected pageContent$ = this.pageContent.asObservable();
  protected domSanitizer = inject(DomSanitizer);

  ngOnInit() {
    this.appActivatedRoute.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap(() => this.loadContent()) // React to every route change
      )
      .subscribe({
        next: (content) => {
          if (content) {
            this.parsePageContent(content).then((result) => {
              this.pageContent.next(result);
            });
          }
          this.pageContent.next(content ?? '');
        },
        error: (error) => {
          console.error('Error in ContentDetailComponent', error);
          this.pageContent.error(error);
          this.pageContent.complete();
          this.cleanup();
        },
      });
  }

  ngOnDestroy() {
    this.cleanup();
  }

  protected loadContent() {
    return this.initPageContent().pipe(
      switchMap(({ contentSlug, pageSlug }) => this.fetchPageContent(pageSlug, contentSlug)),
      catchError((error) => {
        console.error('Error initializing page content', error);
        return of(null);
      })
    );
  }

  private fetchPageContent(pageSlug: string | null, contentSlug: string | null) {
    if (pageSlug && contentSlug) {
      return this.appContentService.getPageContent(pageSlug, contentSlug).pipe(
        // @ts-expect-error
        map((content: { data: { contents: string } }) => content?.data?.contents || null),
        catchError((error) => {
          console.error('Error fetching content', error);
          return of(null);
        })
      );
    }
    return of(null);
  }

  protected initPageContent() {
    return this.appActivatedRoute.paramMap.pipe(
      map((params) => ({
        pageSlug: params.get('pageSlug'),
        contentSlug: params.get('contentSlug'),
      })),
      filter(({ pageSlug, contentSlug }) => !!pageSlug && !!contentSlug),
      switchMap(({ pageSlug, contentSlug }) => this.updatePageContent(pageSlug ?? "", contentSlug ?? ''))
    );
  }

  private updatePageContent(pageSlug: string, contentSlug: string) {
    this.appContentService.pageContent.next({
      pageTitle: pageSlug,
      pageSubtitle: contentSlug,
    });

    return this.appMenuService.rawMenuItems$.pipe(
      map((menuItems) => this.filterMenuItems(menuItems, pageSlug)),
      catchError((error) => {
        console.error('Error fetching menu items', error);
        return of({ contentSlug, pageSlug });
      }),
      map(() => ({ contentSlug, pageSlug }))
    );
  }

  private filterMenuItems(menuItems: any, pageSlug: string) {
    const children = menuItems?.data[0]?.children as MenuItem[];
    if (children) {
      const sideMenuItems = children.filter((child) => child.path === pageSlug);
      this.appMenuService.sideMenuItems.next([...sideMenuItems]);
    }
  }

  protected async parsePageContent(input: string) {
    const processor = unified()
      .use(parse)
      .use(remarkRehype)
      .use(rehypeDocument)
      .use(rehypeFormat)
      .use(rehypeHighlight)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, { behavior: 'append' })
      .use(rehypeStringify);

    const file = await processor.process(input);
    return String(file);
  }

  getExtractedPageContent$() {
    return this.pageContent$.pipe(
      map((content) => {
        const extractedBody = content?.match(/<body.*?>([\s\S]*?)<\/body>/i)?.[1];
        return this.domSanitizer.bypassSecurityTrustHtml(extractedBody ?? '');
      })
    );
  }

  private cleanup() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
