import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/of'
import { RestService } from '../rest/rest.service';
import { RestResponseObject } from '../rest/rest.responseObject';
import { AuthRequest } from './auth.request';
import { Auth } from './auth';

@Injectable()
export class AuthService extends RestService<Auth> {

  constructor(http: Http) {
    super(http, { create: (): Auth => new Auth() });
  }

  login(model: AuthRequest): Observable<RestResponseObject<Auth>> {
    let ths = this;
    return this.postOne('/login', model, true)
      .flatMap((res: RestResponseObject<Auth>) => {
        ths.setCredential(res.object.accessToken, res.object.expires);
        return Observable.of(res);
      });
  }

  logout(): Observable<RestResponseObject<Auth>> {
    let ths = this;
    return this.getOne('/logout')
    .flatMap((res: RestResponseObject<Auth>) => {
      ths.destroyCredential();
      return Observable.of(res);
    });
  }

  private setCredential(token: string, expires: number) {
    localStorage.setItem('access_token', token);
    localStorage.setItem('token_expires', expires.toString());
  }

  private destroyCredential() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_expires');
  }

  static getCurrentAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  static isAuthorized(): boolean {
    return !!AuthService.getCurrentAccessToken();
  }

}