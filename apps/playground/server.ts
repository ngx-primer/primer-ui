import 'zone.js/node';

import { dirname, resolve } from 'node:path';

import { APP_BASE_HREF } from '@angular/common';
import bootstrap from './src/main.server'; // Server bootstrap module
import express from 'express';
import { fileURLToPath } from 'node:url';
import { renderApplication } from '@angular/platform-server';

// Export the Express app so it can be used for serverless functions
export function app(): express.Express {
  const server = express();

  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');

  const indexHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Angular SSR</title>
      </head>
      <body>
        <app-root></app-root>
      </body>
    </html>`;

  // Serve static files from the browser folder
  server.get(
    '*.*',
    express.static(browserDistFolder, {
      maxAge: '1y',
    }),
  );

  // All routes render the Angular application
  server.get('**', async (req, res, next) => {
    try {
      const html = await renderApplication(bootstrap, {
        document: indexHtml,
        url: req.originalUrl,
        platformProviders: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
      });

      res.send(html);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
