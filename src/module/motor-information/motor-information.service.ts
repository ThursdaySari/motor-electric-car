import { Injectable } from '@nestjs/common';
import { MotorInformationDal } from './motor-information.dal';

@Injectable()
export class MotorInformationService {
  constructor(private motorInformationDal: MotorInformationDal) {}
  getHello(): string {
    return 'Hello World!';
  }
}
