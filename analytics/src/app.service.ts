import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private logs: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  createUserLogs(email: string) {
    this.logs.push({
      email: email,
      timestamp: new Date(),
    });
  }

  getData() {
    return this.logs;
  }
}
