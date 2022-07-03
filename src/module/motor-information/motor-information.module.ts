import { Module } from '@nestjs/common';
import { MotorInformationController } from './motor-information.controller';
import { MotorInformationService } from './motor-information.service';

@Module({
  imports: [],
  controllers: [MotorInformationController],
  providers: [MotorInformationService],
})
export class MotorInformationModule {}
