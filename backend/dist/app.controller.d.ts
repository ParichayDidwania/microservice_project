import { AppService } from './app.service';
import { User } from './user.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getUsers(): User[];
    getAnalytics(): import("rxjs").Observable<any>;
    createUser(userObj: User): string;
}
