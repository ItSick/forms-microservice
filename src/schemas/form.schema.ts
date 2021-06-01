import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FormDocument = Form & Document;

@Schema()
export class Form {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  version: number;

  @Prop()
  steps: number;

  @Prop()
  variant: string;

  @Prop()
  hostingApps: [];

  @Prop()
  createdBy: string;

  @Prop()
  updateBy: string;
  
  @Prop()
  createDate: Date;

  @Prop()
  elements: [];
  
}

export const FormSchema = SchemaFactory.createForClass(Form);