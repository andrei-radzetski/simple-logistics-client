import { Injectable } from '@angular/core';
import { RestHttp } from '../rest/rest.http';
import { Observable } from 'rxjs/Observable';
import { RestService } from '../rest/rest.service';
import { RestResponseObject } from '../rest/rest.responseObject';
import { RestResponseArray } from '../rest/rest.responseArray';
import { User } from './user';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class UserService extends RestService<User> {

  constructor(http: RestHttp) {
    super(http, { create: (): User => new User() });
  }

  filter(params?: URLSearchParams): Observable<RestResponseArray<User>> {
    return this.getArray('/users/filter', params);
  }

  getProfileData(): Observable<RestResponseObject<User>> {
    return this.getOne('/profile');
  }

  updateProfileDate(model: User): Observable<RestResponseObject<User>> {
    return this.putOne('/profile', model);
  }

  createProfile(model: User): Observable<RestResponseObject<User>> {
    return this.postOne('/profile', model);
  }

}
