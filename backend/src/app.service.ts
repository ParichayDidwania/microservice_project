import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from './user.dto';
@Injectable()
export class AppService {

  constructor(@Inject('ANALYTICS') private analyticsClient : ClientProxy) {}

  private users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  createUser(userObj: User) {
    this.users.push(userObj);
    this.analyticsClient.emit('user_created', userObj.email);
  }

  getAnalyticsData() {
    return this.analyticsClient.send({cmd: 'getData'}, {});
  }
}
