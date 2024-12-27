import { AppPageController } from './app-page.controller';
import { AppPageService } from './app-page.service';
import { ContentFetchingService } from '../../core/services/content-fetching/content-fetching.service';
import { MarkdownService } from '../../core/services/markdown-service/markdown-service.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AppPageController],
  providers: [AppPageService, ContentFetchingService, MarkdownService],
})
export class AppPageModule {}
