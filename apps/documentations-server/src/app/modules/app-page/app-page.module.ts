import { AppPageController } from './app-page.controller';
import { AppPageService } from './app-page.service';
import { ContentFetchingService } from '../../core/services/content-fetching/content-fetching.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AppPageController],
  providers: [AppPageService, ContentFetchingService],
})
export class AppPageModule {}
