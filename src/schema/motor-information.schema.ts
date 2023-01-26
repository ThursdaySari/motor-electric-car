import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SCHEMA_CONFIG } from '../config/schema.config';

export type MotorInformationDocument = MotorInformation & Document;

@Schema({
  collection: SCHEMA_CONFIG.MOTOR_INFORMATION_COLLECTION,
})
export class MotorInformation {
  @Prop()
  code: string;
  @Prop()
  currentIn: number;
  @Prop()
  currentOut: number;
  @Prop()
  voltageIn: number;
  @Prop()
  voltageOut: number;
  @Prop()
  rpm: number;
  @Prop([Number])
  fft: number[];
  @Prop()
  timestamp: Date;
}

export const MotorInformationSchema =
  SchemaFactory.createForClass(MotorInformation);
