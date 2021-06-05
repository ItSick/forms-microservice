import { Controller, Logger, Post, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FormService } from './form.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(private readonly formService: FormService) {}

  //Define the message pattern for this method
  @MessagePattern('form')
  // Define the logic to be executed 
  async insertForm(@Body('data') data: any) {
    this.logger.log('AppController insertForm data: '+data);
    return this.formService.insertForm(data);
  }
}
