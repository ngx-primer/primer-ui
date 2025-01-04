import { Injectable, inject } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PageContentService {
  private httpClient = inject(HttpClient);
  pageContent = new BehaviorSubject<{
    pageTitle?: string;
    pageSubtitle?: string;
  }>({});

  pagination = new BehaviorSubject<Partial<{
    page: number;
    prev: number;
    next: number;
    length: number;
  }>>({
    page: 0,
    prev: 0,
    next: 0,
    length: 0
  });
  pageContent$ = this.pageContent.asObservable();
  pagination$ = this.pagination.asObservable();
  getPageContent(pageSlug: string, contentSlug: string) {
    return this.httpClient.get(`api/app-docs-pages/${pageSlug}/${contentSlug}`);
  }
}
