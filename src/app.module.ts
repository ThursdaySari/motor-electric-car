import { Module } from '@nestjs/common';
import { MotorInformationModule } from './module/motor-information/motor-information.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { RawsensorInfo } from './schema/raw-sensor-info.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL ?? '', {
      dbName: process.env.DATABASE_NAME,
      retryWrites: true,
      w: 'majority',
      user: process.env.DATABASE_USER,
      pass: process.env.DATABASE_PASSWORD,
    }),
    ScheduleModule.forRoot(),
    MotorInformationModule,
    RawsensorInfo,
  ],
})
export class AppModule {}
