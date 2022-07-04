import { Injectable } from '@nestjs/common';
import { MotorInformationDal } from './motor-information.dal';
import { CreateCurrentRecord } from './interface/create-current-record.interface'
@Injectable()
export class MotorInformationService {
  constructor(private motorInformationDal: MotorInformationDal) {}
  getHello(): string {
    return 'Hello World!';
  }
  SaveMotorData(metaData: CreateCurrentRecord){
    this.motorInformationDal.addLog(metaData)
  }
}
