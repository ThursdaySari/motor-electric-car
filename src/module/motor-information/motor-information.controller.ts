import { Controller, Get } from '@nestjs/common';
import { MotorInformationService } from './motor-information.service';

@Controller()
export class MotorInformationController {
  constructor(private readonly motorInfoService: MotorInformationService) {}

  @Get()
  getHello(): string {
    return this.motorInfoService.getHello();
  }
}
