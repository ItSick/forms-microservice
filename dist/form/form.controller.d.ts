import { FormService } from '../form/form.service';
export declare class FormController {
    private readonly formService;
    private logger;
    constructor(formService: FormService);
    getForm(data: {}): Promise<{}>;
}
