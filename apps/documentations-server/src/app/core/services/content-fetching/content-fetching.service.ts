import { Injectable, Logger } from '@nestjs/common';
import { existsSync, readFile } from 'fs';

import { join } from 'path';
import { promisify } from 'util';
import { workspaceRoot } from '@nx/devkit';

@Injectable()
export class ContentFetchingService {
  async load(filePath: string): Promise<string> {
    Logger.log('ContentFetchingService, load file by given filePath', {filePath});
    const fullPath = join(workspaceRoot, 'apps/documentations-server/src/assets/contents', filePath);
    
    Logger.log('ContentFetchingService, parsed fullPath', {fullPath});
    if (!existsSync(fullPath)) {
      Logger.error('ContentFetchingService, File does not exist', { fullPath });
      throw new Error(`File not found: ${fullPath}`);
    }

    const readFileAsync = promisify(readFile);

    try {
      
      Logger.log('ContentFetchingService, start reading file', { fullPath });
      const data = await readFileAsync(fullPath, 'utf-8');
      Logger.log('ContentFetchingService, Success readFile given filepath', { fullPath, data });
      return data;
      
    } catch (err) {
      Logger.error('ContentFetchingService, Error while reading filepath', { fullPath, err });
      throw err;
    }
  }
}
