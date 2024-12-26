import { Controller, Get, Param } from '@nestjs/common';

import { AppMenuService } from './app-menu.service';

export interface MenuItem {
  path: string,
  title: string,
  children?: MenuItem[]
}

@Controller()
export class AppMenuController {

  constructor(
    private readonly appMenuService: AppMenuService,
  ) {
  }

  @Get('app-docs-menus')
  public index() {
    return this.appMenuService.getMenus();
  }

  @Get('app-docs-menus/:path')
  public getMenuByPath(@Param('path') path: string) {
    return this.appMenuService.getMenuByPath(path);
  }
}
