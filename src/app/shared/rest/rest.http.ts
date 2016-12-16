import { Injectable, Inject } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { RestCredential } from './rest.credential';

@Injectable()
export class RestHttp extends Http {

  constructor(_backend: XHRBackend, _defaultOptions: RequestOptions, private router: Router) {
    super(_backend, _defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    this.preProcessRequest(url, options);
    return super.request(url, options).catch(this.catchError(this));
  }

  /**
   * Set Authorization header to request options.
   */
  private preProcessRequest(url: string | Request, options?: RequestOptionsArgs): void {
    let token = RestCredential.getCurrentAccessToken();
    if (typeof url === 'string') {
      options = options ? options : { headers: new Headers() };
      options.headers.set('Authorization', `Bearer ${token}`);
    } else {
      url.headers.set('Authorization', `Bearer ${token}`);
    }
  }

  /**
   * Catch http error.
   * If it is the status 401 - destroy credential. 
   * If InternalCode isn't 40001 or 40002, redirect to login page.
   */
  private catchError(self: RestHttp) {
    return (err: Response): Observable<Response> => {
      if (err.status === 401) {
        RestCredential.destroyCredential();
      }
      if (err.status === 401 && !self.isCredentialError(err)) {
        self.router.navigate(['/login']);
      }
      return Observable.throw(err);
    }
  }

  /**
   * Check internalCode 40001 or 40002.
   * 20001 - user not found (only with authorization).
   * 20002 - password is wrong (only with authorization).
   */
  private isCredentialError(err: Response): boolean {
    if (err.status === 401) {
      return false;
    }

    let body = err.json();
    return body != null && (body.internalCode === 40001 || body.internalCode === 40002);
  }

}