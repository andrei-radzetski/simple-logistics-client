import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RestDataService } from '../rest/rest.dataService'
import { AuthRequest } from './auth.request';
import { Auth } from './auth';
import { RestResponse } from '../rest/rest.response';
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/of'

@Injectable()
export class AuthService extends RestDataService<Auth> {

  constructor(http: Http) {
    super(http);
  }

  getCreator(): { new (): Auth; } {
    return Auth;
  }

  login(model: AuthRequest): Observable<RestResponse<Auth>> {
    let ths = this;
    return this.postForm('/login', model)
      .flatMap((res: RestResponse<Auth>) => {
        ths.setCredential(res.data.accessToken, res.data.expires);
        return Observable.of(res);
      });
  }

  logout(): Observable<RestResponse<Auth>> {
    let ths = this;
    return this.getProtected('/logout').flatMap((res: RestResponse<Auth>) => {
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