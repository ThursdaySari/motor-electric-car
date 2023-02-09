import { Injectable } from '@nestjs/common';
import { MotorInformationDal } from './motor-information.dal';
import { CreateCurrentRecord } from './interface/create-current-record.interface';
import { Interval, Timeout } from '@nestjs/schedule';
import { MotorInformation } from '../../schema/motor-information.schema';
@Injectable()
export class MotorInformationService {
  constructor(private motorInformationDal: MotorInformationDal) {}
  getHello(): string {
    return 'Hello World!';
  }

  // @Interval(2000)
  MockupData() {
    console.log('Receiving running...');
    const code = 'A01';
    this.SaveMotorData({
      code,
      fft: [0],
    });
  }

  SaveMotorData(metaData: CreateCurrentRecord): void {
    this.motorInformationDal.saveData(metaData);
  }

  async GetMotorData(): Promise<MotorInformation[]> {
    return this.motorInformationDal.getData();
  }

  SaveRawData(irms: number): void {
    this.motorInformationDal.saveRawData(irms);
  }
}
