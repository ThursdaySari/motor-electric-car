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

  async saveData(motorCurrentRecord: CreateCurrentRecord): Promise<void> {
    const data: MotorInformation = {
      code: motorCurrentRecord.code,
      fft: motorCurrentRecord.fft,
      timestamp: new Date(),
    };
    await this.motorInformationModel.create(data);
  }

  async getData(): Promise<MotorInformation[]> {
    const result = await this.motorInformationModel.find().limit(10000).exec();
    return result;
  }
}
