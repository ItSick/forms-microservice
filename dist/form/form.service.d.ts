import { Model } from 'mongoose';
import { Form } from './form.model';
export declare class FormService {
    private readonly formModel;
    constructor(formModel: Model<Form>);
    insertForm(form: {}): Promise<Form & import("mongoose").Document<any, any>>;
    getForm(data: {}): {};
}
