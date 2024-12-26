/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

/// <reference types="node" />

declare const module: {
  hot: {
    accept: () => void;
    dispose: (callback: () => void) => void;
  };
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;

  const server = app.getHttpAdapter().getInstance();
  if ('_router' in server) {
    const router = server._router;
    const routes = router.stack
      .filter((layer) => layer.route)
      .map((layer) => {
        const { path, methods } = layer.route;
        const method = Object.keys(methods)[0].toUpperCase();
        return { path, method };
      });

    console.log('Registered Routes:', routes);
  }

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
