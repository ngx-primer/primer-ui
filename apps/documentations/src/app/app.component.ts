import { Component, OnInit, inject } from '@angular/core';
import { MenuItem, MenuService } from './core/services/menu-service/menu-service.service';

import { BehaviorSubject } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  imports: [
    RouterModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  protected menuService = inject(MenuService);

  menuItems = new BehaviorSubject([] as MenuItem[]);
  ngOnInit(): void {
    console.log("ensure only init once per refresh")
    this.loadAppMenu();
  }
  protected loadAppMenu() {
    console.log(this.menuService);
    this.menuService.getMenuTree().subscribe({
      next: (value) => this.menuItems.next(value)
    })
  }
}
