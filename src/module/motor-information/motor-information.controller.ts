import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCurrentRecord } from './interface/create-current-record.interface';
import { MotorInformationService } from './motor-information.service';

@Controller('motor')
export class MotorInformationController {
  constructor(private readonly motorInfoService: MotorInformationService) {}

  @Get('hello')
  getHello(): string {
    return this.motorInfoService.getHello();
  }
  @Post('save')
  saveData(@Body() body: CreateCurrentRecord) {
    this.motorInfoService.SaveMotorData(body);
    return {
      success: 'success',
    };
  }
  @Get('/')
  getData() {
    const result = this.motorInfoService.GetMotorData();
    return result;
  }
}
