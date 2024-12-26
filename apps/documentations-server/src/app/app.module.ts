import { AppController } from './app.controller';
import { AppMenuModule } from './modules/app-menu/app-menu.module';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [AppMenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
