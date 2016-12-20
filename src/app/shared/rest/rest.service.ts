import { RequestOptions, URLSearchParams, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

import { RestHttp } from './rest.http';
import { AuthService } from '../auth/auth.service';

import { RestRequest } from './rest.request';
import { RestObject } from './rest.object';
import { RestObjectCreator } from './rest.objectCreator';
import { RestResponseError } from './rest.responseError';
import { RestResponseObject } from './rest.responseObject';
import { RestResponseArray } from './rest.responseArray';
import { RestResponseSimpleArray } from './rest.responseSimpleArray';

export abstract class RestService<T extends RestObject> {

  /**
   * API-server url.
   */
  public static get API(): string {
    // TODO: Move to config
    return 'http://localhost:3002';
  }

  private http: RestHttp;
  private creator: RestObjectCreator<T>;

  constructor(http: RestHttp, creator: RestObjectCreator<T>) {
    this.http = http;
    this.creator = creator;
  }

  /**
   * Create request options for post method.
   * Add json header or form header.
   * 
   * @param {boolean} isForm - is it form type.
   * @returns {RequestOptions}
   */
  private getPostRequestOptions(isForm?: boolean): RequestOptions {
    let headers = new Headers();

    if (isForm) {
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
    } else {
      headers.append('Content-Type', 'application/json');
    }

    return new RequestOptions({ headers: headers });
  }

  /**
   * Create request options for put method.
   * Add json header.
   * 
   * @returns {RequestOptions}
   */
  private getPutRequestOptions(): RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
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
    url = RestService.API + url;

    return this.http.get(url, { search: params })
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
    url = RestService.API + url;

    return this.http.get(url, { search: params })
      .map((res: Response) => new RestResponseArray(res, this.creator))
      .catch((err: Response) => Observable.throw(new RestResponseError(err)));
  }

  /**
   * Call GET method. Expects array of simple objects as response.
   * 
   * @param {string} url - service url.
   * @param {URLSearchParams} params - url params.
   * @returns {Observable<RestResponseSimpleArray<U>>}
   */
   getSimpleArray<U>(url: string, params?: URLSearchParams): Observable<RestResponseSimpleArray<U>> {
    url = RestService.API + url;

    return this.http.get(url)
      .map((res: Response) => new RestResponseSimpleArray(res))
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

  /**
   * Call PUT method. Expects only single object as response.
   * 
   * @param {string} url - service url.
   * @param {RestRequest} model - body.
   * @returns {Observable<RestResponseObject<T>>}
   */
  putOne(url: string, model: RestRequest): Observable<RestResponseObject<T>> {
    let options = this.getPutRequestOptions();
    url = RestService.API + url;

    return this.http.put(url, model.toRequest(), options)
      .map((res: Response) => new RestResponseObject(res, this.creator))
      .catch((err: Response) => Observable.throw(new RestResponseError(err)));
  }


}
