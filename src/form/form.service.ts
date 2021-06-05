import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import FormModel  from './form.model';


@Injectable()
export class FormService {

  constructor(@InjectModel('Form') private readonly formModel: Model<FormModel>){}

  async insertForm(form: any) {
    console.log('insert form service server')
    const newForm = new this.formModel(form);
    const result = await newForm.save();
    return result;
  }

  getForm(data: {}): {} {
    return { res: 'Form returned!' };
  }
}
