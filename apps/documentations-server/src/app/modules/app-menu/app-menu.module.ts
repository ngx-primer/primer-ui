import { AppMenuController } from './app-menu.controller';
import { AppMenuService } from './app-menu.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AppMenuController],
  providers: [AppMenuService],
})
export class AppMenuModule {}
