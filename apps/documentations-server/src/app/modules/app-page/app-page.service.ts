import { Injectable, Logger } from '@nestjs/common';

import { ContentFetchingService } from '../../core/services/content-fetching/content-fetching.service';
import { MarkdownService } from '../../core/services/markdown-service/markdown-service.service';

@Injectable()
export class AppPageService {

  constructor(
    protected contentFetchingService: ContentFetchingService,
    protected markdownService: MarkdownService
  ) {
  }
  
  async loadContent(path: string, slug: string) {
    Logger.log('AppPageService, Call loadContent', { path, slug });
    try {
      const content = await this.contentFetchingService.load(`${path}/${slug}.md`);
      Logger.log('AppPageService, Success loading content', { path, slug, content });
      const parsedContent = await this.markdownService.parse(content, true);
      Logger.log('AppPageService, Success parsing content', { path, slug, parsedContent });
      return parsedContent;
    } catch (error) {
      Logger.error('AppPageService, Error While Loading and Parsing content', { error });
      throw error;
    }
  }
}