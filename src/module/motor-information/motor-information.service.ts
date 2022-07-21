import { Injectable } from '@nestjs/common';
import { MotorInformationDal } from './motor-information.dal';
import { CreateCurrentRecord } from './interface/create-current-record.interface';
import { Interval } from '@nestjs/schedule';
@Injectable()
export class MotorInformationService {
  constructor(private motorInformationDal: MotorInformationDal) {}
  getHello(): string {
    return 'Hello World!';
  }

  @Interval(2000) // ms
  MockupData() {
    console.log('Mockup running...');
    const code = 'A01';
    const currentIn = 3;
    const voltageIn = 110;
    const rpm = 500;

    const currentOut = Math.floor(Math.random() * 3 + 1);
    const voltageOut = Math.floor(Math.random() * 2 + 108);
    this.SaveMotorData({
      code,
      currentIn,
      voltageIn,
      rpm,
      currentOut,
      voltageOut,
    });
  }

  SaveMotorData(metaData: CreateCurrentRecord) {
    this.motorInformationDal.addLog(metaData);
  }
}
