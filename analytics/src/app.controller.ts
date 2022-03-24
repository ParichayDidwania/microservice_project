import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_created')
  handleUserCreated(email: string) {
    this.appService.createUserLogs(email);
  }

  @MessagePattern({ cmd: 'getData' })
  getData() {
    return this.appService.getData();
  }
}
