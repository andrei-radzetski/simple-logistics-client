import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RestDataService } from '../rest/rest.dataService'
import { User } from './user';
import { RestResponse } from '../rest/rest.response';
import { RestCreator } from '../rest/rest.creator';

@Injectable()
export class UserService extends RestDataService<User> {

  constructor(http: Http) {
    super(http);
  }

  getCreator(): RestCreator<User> {
    return { create: (): User => new User() };
  }

  getArrayCreator(): RestCreator<Array<User>> {
    return { create: (): Array<User> => new Array<User>() };
  }

  getProfileData(): Observable<RestResponse<User>> {
    return this.getProtected('/profile');
  }

}