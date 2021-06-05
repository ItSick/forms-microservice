import { Model } from 'mongoose';
import FormModel from './form.model';
export declare class FormService {
    private readonly formModel;
    constructor(formModel: Model<FormModel>);
    insertForm(form: any): Promise<FormModel & import("mongoose").Document<any, any>>;
    getForm(data: {}): {};
}
