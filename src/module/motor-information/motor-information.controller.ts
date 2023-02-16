import { Body, Controller, Get, Post, Request } from '@nestjs/common';
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

  @Post('saveRawData')
  saveRawData(@Body() body: any) {
    this.motorInfoService.SaveRawData(body.irms);
    return {
      success: 'success',
    };
  }

  @Get('/rawdata')
  getRawData() {
    const result = this.motorInfoService.GetRawData();
    return result;
  }

  @Get('/fftdata')
  getFftData() {
    const result = this.motorInfoService.GetfftData();
    return result;
  }

  @Post('/savefft')
  saveFft(@Body() jbody: any): string {
    console.log(jbody);
    const obj = JSON.parse(jbody.api_dev_key);
    const result = this.motorInfoService.SaveFftData(obj);
    // return result;
    return 'save completed';
  }
}
