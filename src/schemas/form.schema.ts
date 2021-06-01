import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FormDocument = Form & Document;

@Schema()
export class Form {
  // @Prop()
  // id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  version: number;

  @Prop({ required: true })
  steps: number;

  @Prop({ required: true })
  variant: string;

  @Prop()
  hostingApps: [];

  @Prop({ required: true })
  createdBy: string;

  @Prop({ required: true })
  updateBy: string;
  
  @Prop({ required: true })
  createDate: Date;

  @Prop()
  elements: [];
  
}

export const FormSchema = SchemaFactory.createForClass(Form);