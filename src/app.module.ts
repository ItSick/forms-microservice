import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FormService } from './form.service';
import { AppService } from './app.service';
import { FormModel } from './form.model';




@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Itsik:salesmen@forms.jm15i.mongodb.net/FormsDB?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService,FormService,FormModel],
})
export class AppModule {}
