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
      currentIn: motorCurrentRecord.currentIn,
      currentOut: motorCurrentRecord.currentOut,
      voltageIn: motorCurrentRecord.voltageIn,
      voltageOut: motorCurrentRecord.voltageOut,
      rpm: motorCurrentRecord.rpm,
      timestamp: new Date(),
    };
    await this.motorInformationModel.create(data);
  }

  async getData(): Promise<MotorInformation[]> {
    const result = await this.motorInformationModel.find().limit(50).exec();
    return result;
  }
}
