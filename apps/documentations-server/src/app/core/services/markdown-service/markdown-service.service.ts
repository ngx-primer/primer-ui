import { Injectable, Logger } from '@nestjs/common';
import { Token, marked } from 'marked';

@Injectable()
export class MarkdownService {
  protected processor = marked;
  constructor() {
    this.processor.setOptions({
      "async": false,
      "breaks": false,
      "extensions": null,
      "gfm": true,
      "hooks": null,
      "pedantic": false,
      "silent": false,
      "tokenizer": null,
      "walkTokens": null
    });
  } 
  async parse(input: string, asJson: true): Promise<string | Token> {
    Logger.log('MarkdownService, start parse', { input, asJson });
    
    try {
      
      const data = asJson ? this.processor.lexer(input) : this.processor(input);
      Logger.log('MarkdownService, end parse', { data });
      return data as string | Token;
      
    } catch (error) {
      Logger.error('MarkdownService, Error while parsing markdown', { error });
      throw error;
    }
  }
}