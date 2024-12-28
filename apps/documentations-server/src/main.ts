/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import { format, transports } from 'winston';

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

export const WinstonLoggerFactory = (appName: string) => {
  let consoleFormat;

  const DEBUG = process.env.DEBUG;
  const USE_JSON_LOGGER = process.env.USE_JSON_LOGGER;

  if (USE_JSON_LOGGER === 'true') {
    consoleFormat = format.combine(
      format.ms(),
      format.timestamp(),
      format.json(),
    );
  } else {
    consoleFormat = format.combine(
      format.timestamp(),
      format.ms(),
      nestWinstonModuleUtilities.format.nestLike(appName, {
        colors: true,
        prettyPrint: true,
      }),
    );
  }

  return WinstonModule.createLogger({
    level: DEBUG ? 'debug' : 'info',
    transports: [new transports.Console({ format: consoleFormat })],
  });
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonLoggerFactory('DocumentationsServer-Angular'),
  });
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

    Logger.log(`Registered routes: ${JSON.stringify(routes, null, 2)}`);
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
