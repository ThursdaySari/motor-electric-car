import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MotorInformationController } from './motor-information.controller';
import { MotorInformationDal } from './motor-information.dal';
import { MotorInformationService } from './motor-information.service';
import {
  MotorInformation,
  MotorInformationSchema,
} from '../../schema/motor-information.schema';
import { RawsensorInformationSchema } from '../../schema/raw-sensor-info.schema';
import { RawsensorInfo } from '../../schema/raw-sensor-info.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MotorInformation.name, schema: MotorInformationSchema },
      { name: RawsensorInfo.name, schema: RawsensorInformationSchema },
    ]),
  ],
  controllers: [MotorInformationController],
  providers: [MotorInformationService, MotorInformationDal],
})
export class MotorInformationModule {}
