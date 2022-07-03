import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  MotorInformationDocument,
  MotorInformation,
} from '../../schema/motor-information.schema';
import { CreateCurrentRecord } from './interface/create-current-record.interface';

@Injectable()
export class MotorInformationDal {
  constructor(
    @InjectModel(MotorInformation.name)
    private motorInformationModel: Model<MotorInformationDocument>,
  ) {}

  async addLog(motorCurrentRecord: CreateCurrentRecord): Promise<void> {
    const data: MotorInformation = {
      code: motorCurrentRecord.code,
      currect: motorCurrentRecord.current,
      timestamp: new Date(),
    };
    await this.motorInformationModel.create(data);
  }
}
