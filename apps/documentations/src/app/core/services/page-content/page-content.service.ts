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
  pageContent$ = this.pageContent.asObservable();
  getPageContent(pageSlug: string, contentSlug: string) {
    return this.httpClient.get(`api/app-docs/${pageSlug}/${contentSlug}`);
  }
}
