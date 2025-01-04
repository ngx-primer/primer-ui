import { Injectable, inject } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface MenuItem {
  path: string;
  title: string;
  children?: MenuItem[];
}

export interface MenuResponse {
  data: MenuItem[];
  error?: unknown;
}
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly http: HttpClient = inject(HttpClient);

  public rawMenuItems = new BehaviorSubject<MenuResponse>({
    data: []
  });
  public rawMenuItems$ = this.rawMenuItems.asObservable();

  public sideMenuItems = new BehaviorSubject<MenuItem[]>([]);
  public sideMenuItems$ = this.sideMenuItems.asObservable();
  
  public getAppMenus() {
    return this.http.get<{
      data: MenuItem[];
      error?: unknown;
    }>('api/app-docs-menus');
  }
}
