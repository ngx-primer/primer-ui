import { APP_INTERCEPTOR } from '@nestjs/core';
import { ApiResponseInterceptor } from './core/utilities/http-response.interceptor';
import { AppController } from './app.controller';
import { AppMenuModule } from './modules/app-menu/app-menu.module';
import { AppPageModule } from './modules/app-page/app-page.module';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
@Module({
  imports: [AppMenuModule, AppPageModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ApiResponseInterceptor,
    },
  ],
})
export class AppModule {}
