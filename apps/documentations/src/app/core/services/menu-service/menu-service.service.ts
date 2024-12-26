import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface MenuItem {
  path: string;
  title: string;
  children?: MenuItem[];
}
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly http: HttpClient = inject(HttpClient);

  public getAppMenus() {
    return this.http.get<MenuItem[]>('/api/app-docs-menus');
  }
}
