import { Controller, Logger, Post, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { MathService } from './math.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(private readonly mathService: MathService) {}

  //Define the message pattern for this method
  @MessagePattern('add')
  // Define the logic to be executed 
  async accumulate(@Body('data') data: number[]) {
    this.logger.log('Adding '+data.toString());
    return this.mathService.accumulate(data);
  }
}
