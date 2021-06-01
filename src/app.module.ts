import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MathService } from './math.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/formsDb')],
  controllers: [AppController],
  providers: [AppService, MathService],
})
export class AppModule {}
