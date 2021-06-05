import { Controller, Logger, Post, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FormService } from './form.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(private readonly formService: FormService) {}

  @MessagePattern('form')
  async insertForm(@Body('data') data: any) {
    this.logger.log('AppController insertForm data: '+data);
    return this.formService.insertForm(data);
  }
}
