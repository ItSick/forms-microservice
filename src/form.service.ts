import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import FormModel  from './form.model';


@Injectable()
export class FormService {

  constructor(){}

  async insertForm(form: any) {
    console.log('insert form service server')
    //insert form to DB
    console.log(JSON.stringify(form));
    return JSON.stringify(form);
  }

  getForm(data: {}): {} {
    return { res: 'Form returned!' };
  }
}
