export declare class FormModel {
    private form;
    constructor(form: any);
    id: string;
    name: string;
    version: number;
    steps: number;
    variant: string;
    hostingApps: [];
    createdBy: string;
    updateBy: string;
    createDate: Date;
    elements: [];
}
