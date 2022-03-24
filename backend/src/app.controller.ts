import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalyticsData();
  }

  @Post()
  createUser(@Body() userObj : User) {
    this.appService.createUser(userObj);
    return "Created Successfully!";
  }
}
