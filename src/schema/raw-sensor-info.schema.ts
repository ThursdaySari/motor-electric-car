import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SCHEMA_CONFIG } from '../config/schema.config';

export type RawsensorInformationDocument = RawsensorInfo & Document;

@Schema({
  collection: SCHEMA_CONFIG.RAWSENSORINFO_INFORMATION_COLLECTION,
})
export class RawsensorInfo {
  @Prop()
  code: string;

  @Prop()
  irms: number;
  @Prop()
  timestamp: Date;
}

export const RawsensorInformationSchema =
  SchemaFactory.createForClass(RawsensorInfo);
