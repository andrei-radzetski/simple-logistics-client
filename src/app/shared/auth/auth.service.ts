import { Injectable } from '@angular/core';
import { RestHttp } from '../rest/rest.http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/of'
import { RestService } from '../rest/rest.service';
import { RestResponseObject } from '../rest/rest.responseObject';
import { RestCredential } from '../rest/rest.credential';
import { AuthRequest } from './auth.request';
import { Auth } from './auth';

@Injectable()
export class AuthService extends RestService<Auth> {

  constructor(http: RestHttp) {
    super(http, { create: (): Auth => new Auth() });
  }

  login(model: AuthRequest): Observable<RestResponseObject<Auth>> {
    return this.postOne('/login', model, true)
      .flatMap((res: RestResponseObject<Auth>) => {
        RestCredential.setCredential(res.object.accessToken, res.object.expires, res.object.scope, res.object.user);
        return Observable.of(res);
      });
  }

  logout(): Observable<RestResponseObject<Auth>> {
    return this.getOne('/logout')
    .flatMap((res: RestResponseObject<Auth>) => {
      RestCredential.destroyCredential();
      return Observable.of(res);
    });
  }

}
