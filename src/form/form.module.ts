import { Module } from '@nestjs/common';
import { FormController } from '../form/form.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FormService } from '../form/form.service';
import { Schema } from 'mongoose';
import { FormSchema } from 'src/schemas/form.schema';


@Module({
  imports: [MongooseModule.forFeature([{name: 'Forms',schema: FormSchema}])],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
