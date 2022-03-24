import { ClientProxy } from '@nestjs/microservices';
import { User } from './user.dto';
export declare class AppService {
    private analyticsClient;
    constructor(analyticsClient: ClientProxy);
    private users;
    getUsers(): User[];
    createUser(userObj: User): void;
    getAnalyticsData(): import("rxjs").Observable<any>;
}
