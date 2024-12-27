import { Get, Param, Controller, Logger, Res } from "@nestjs/common";
import { AppPageService } from "./app-page.service";
import { Subscription } from "rxjs";
import { Token } from "marked";

@Controller()
export class AppPageController{

  constructor(
    protected readonly appPageService: AppPageService,
  ) {
  }

  protected appPageServiceSubscription: Subscription;

  @Get('app-docs-pages/:path/:slug')
  async get(
    @Param('path') path: string,
    @Param('slug') slug: string,
  ) {
    Logger.log('AppPageController, Call get', { path, slug });
    try {
      const data: string | Token = await this.appPageService.loadContent(path, slug);
      Logger.log('AppPageController, Success loading content', { path, slug, data });
      return ({
        page: `${path}/${slug}`,
        path,
        slug,
        contents: data
      })
    } catch (error: Error | unknown) {
      Logger.log('AppPageController, Error loading content', { path, slug, error });
      throw new Error(error instanceof Error ? error.message : 'Error while loading content');
    }
  }
}