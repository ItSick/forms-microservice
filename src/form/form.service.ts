import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from './form.model';


@Injectable()
export class FormService {

  constructor(@InjectModel('Form') private readonly formModel: Model<Form>){}

  async insertForm(form: { } ) {
    const newForm = new this.formModel(form);
    const result = await newForm.save();
    return result;
  }

  getForm(data: {}): {} {
    return { res: 'Form returned!' };
  }
}
