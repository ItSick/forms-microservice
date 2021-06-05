import { Controller, Logger, Post, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FormService } from '../form/form.service';

@Controller()
export class FormController {
  private logger = new Logger('FormController');
  constructor(private readonly formService: FormService) { }
  
  
  //Define the message pattern for this method
  @MessagePattern('form')
  // Define the logic to be executed 
  async getForm(@Body('data') data: {}) {
    this.logger.log('forms '+ data.toString());
    return this.formService.getForm(data);
  }

}
