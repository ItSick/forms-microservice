import { Document } from 'mongoose';
export declare type FormDocument = Form & Document;
export declare class Form {
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
export declare const FormSchema: import("mongoose").Schema<Document<Form, any>, import("mongoose").Model<any, any, any>, undefined>;
