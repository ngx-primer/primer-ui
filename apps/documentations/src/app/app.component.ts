import { BehaviorSubject, Subscription } from 'rxjs';
import { Component, OnInit, inject } from '@angular/core';
import {
  MenuItem,
  MenuService,
} from './core/services/menu-service/menu-service.service';

import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  protected menuService = inject(MenuService);

  menuItems = new BehaviorSubject([] as MenuItem[]);
  appMenuSubscription!: Subscription;
  ngOnInit(): void {
    // console.log("ensure only init once per refresh")
    this.loadAppMenu();
  }
  protected loadAppMenu() {
    this.appMenuSubscription = this.menuService.getAppMenus().subscribe({
      next: (value) => this.menuItems.next(value),
    });
  }

  getMenuItems() {
    return this.menuItems.asObservable();
  }

  onDestroy() {
    this.appMenuSubscription.unsubscribe();
  }
}
