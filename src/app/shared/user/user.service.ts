import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from '../rest/rest.service';
import { RestResponseObject } from '../rest/rest.responseObject';
import { User } from './user';

@Injectable()
export class UserService extends RestService<User> {

  constructor(http: Http) {
    super(http, { create: (): User => new User() });
  }

  getProfileData(): Observable<RestResponseObject<User>> {
    return this.getOne('/profile');
  }

}
