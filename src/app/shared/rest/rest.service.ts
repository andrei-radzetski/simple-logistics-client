import { Http, RequestOptions, URLSearchParams, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

import { AuthService } from '../auth/auth.service';

import { RestRequest } from './rest.request';
import { RestObject } from './rest.object';
import { RestObjectCreator } from './rest.objectCreator';
import { RestResponseError } from './rest.responseError';
import { RestResponseObject } from './rest.responseObject';
import { RestResponseArray } from './rest.responseArray';

export abstract class RestService<T extends RestObject> {

  /**
   * API-server url.
   */
  public static get API(): string {
    // TODO: Move to config
    return 'http://localhost:3002';
  }

  private http: Http;
  private creator: RestObjectCreator<T>;

  constructor(http: Http, creator: RestObjectCreator<T>) {
    this.http = http;
    this.creator = creator;
  }

  /**
   * Create authorization headers.
   * Add 'Authorization' header, value must be "Bearer " + token.
   * 
   * @returns {Headers}
   */
  private getAuthorizationHeaders(): Headers {
    let token = AuthService.getCurrentAccessToken()
    return token ? new Headers({ 'Authorization': 'Bearer ' + token }) : undefined;
  }

  /**
   * Create request options for get method.
   * Add authorization header and params.
   * 
   * @param {URLSearchParams} params - url params.
   * @returns {RequestOptions}
   */
  private getGetRequestOptions(params?: URLSearchParams): RequestOptions {
    let headers = this.getAuthorizationHeaders();
    return new RequestOptions({ headers: headers, search: params });
  }

  /**
   * Create request options for post method.
   * Add authorization header and json, otherwise form.
   * 
   * @param {boolean} isForm - is it form type.
   * @returns {RequestOptions}
   */
  private getPostRequestOptions(isForm?: boolean): RequestOptions {
    let headers = this.getAuthorizationHeaders();
    headers = headers ? headers : new Headers();

    if (isForm) {
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
    } else {
      headers.append('Content-Type', 'application/json');
    }

    return new RequestOptions({ headers: headers });
  }

  /**
   * Call GET method. Expects only single object as response.
   * 
   * @param {string} url - service url.
   * @param {URLSearchParams} params - url params.
   * @returns {Observable<RestResponseObject<T>>}
   */
  getOne(url: string, params?: URLSearchParams): Observable<RestResponseObject<T>> {
    let options = this.getGetRequestOptions();
    url = RestService.API + url;

    return this.http.get(url, options)
      .map((res: Response) => new RestResponseObject(res, this.creator))
      .catch((err: Response) => Observable.throw(new RestResponseError(err)));
  }

  /**
   * Call GET method. Expects array of objects as response.
   * 
   * @param {string} url - service url.
   * @param {URLSearchParams} params - url params.
   * @returns {Observable<RestResponseObject<T>>}
   */
  getArray(url: string, params?: URLSearchParams): Observable<RestResponseArray<T>> {
    let options = this.getGetRequestOptions();
    url = RestService.API + url;

    return this.http.get(url, options)
      .map((res: Response) => new RestResponseArray(res, this.creator))
      .catch((err: Response) => Observable.throw(new RestResponseError(err)));
  }

  /**
   * Call POST method. Expects only single object as response.
   * 
   * @param {string} url - service url.
   * @param {RestRequest} model - body.
   * @param {boolean} isForm - if true, header is 
   * "application/x-www-form-urlencoded", otherwise "application/json".
   * @returns {Observable<RestResponseObject<T>>}
   */
  postOne(url: string, model: RestRequest, isForm?: boolean): Observable<RestResponseObject<T>> {
    let options = this.getPostRequestOptions(isForm);
    url = RestService.API + url;

    return this.http.post(url, model.toRequest(), options)
      .map((res: Response) => new RestResponseObject(res, this.creator))
      .catch((err: Response) => Observable.throw(new RestResponseError(err)));
  }

}
