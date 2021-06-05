import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FormService } from './form.service';
import { AppService } from './app.service';
import FormModel from './form.model';




@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/local')],
  controllers: [AppController],
  providers: [AppService,FormService,FormModel],
})
export class AppModule {}
