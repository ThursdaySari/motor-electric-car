import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SCHEMA_CONFIG } from '../config/schema.config';

export type UserDocument = User & Document;

@Schema({
  collection: SCHEMA_CONFIG.USER_COLLECTION,
})
export class User {
  @Prop()
  username: string;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
