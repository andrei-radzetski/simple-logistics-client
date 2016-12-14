import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RestDataService } from '../rest/rest.dataService'
import { User } from './user';
import { RestResponse } from '../rest/rest.response';

@Injectable()
export class UserService extends RestDataService<User> {

    constructor(http: Http) {
        super(http);
    }

    getCreator(): { new (): User; } {
        return User;
    }

    getProfileData(): Observable<RestResponse<User>> {
      return this.getProtected('/profile');
    }

}