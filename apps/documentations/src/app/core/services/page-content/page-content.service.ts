import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PageContentService {
  private assetPath = 'assets/page-contents';
  private httpClient = inject(HttpClient);

  getPageData(opts: { page: string; params: string }) {
    return this.httpClient.get(
      `${this.assetPath}/${opts.page}/${opts.params}.json`,
    );
  }
}
