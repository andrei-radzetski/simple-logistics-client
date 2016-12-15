import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { RestResponse } from './rest.response';
import { RestArrayResponse } from './rest.arrayResponse';
import { RestRequest } from './rest.request';
import { RestCreator } from './rest.creator';
import { RestModelFill } from './rest.modelFill';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

export abstract class RestDataService<T extends RestModelFill> {

  public static get API_URL(): string {
    return 'http://localhost:3002';
  }

  protected http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  abstract getCreator(): RestCreator<T>;

  abstract getArrayCreator(): RestCreator<Array<T>>;

  protected getOne(url: string, options: RequestOptions): Observable<RestResponse<T>> {
    let apiUrl = RestDataService.API_URL + url;

    return this.http.get(apiUrl, options)
      .map((res: Response) => new RestResponse(res, this.getCreator()))
      .catch((err: Response) => Observable.throw(new RestResponse(err, this.getCreator())));
  }

  protected getOneProtected(url: string): Observable<RestResponse<T>> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + AuthService.getCurrentAccessToken() });
    let options = new RequestOptions({ headers: headers });

    return this.getOne(url, options);
  }

  protected getArray(url: string, options: RequestOptions): Observable<RestArrayResponse<Array<T>>> {
    let apiUrl = RestDataService.API_URL + url;

    return this.http.get(apiUrl, options)
      .map((res: Response) => new RestArrayResponse(res, this.getArrayCreator()))
      .catch((err: Response) => Observable.throw(new RestArrayResponse(err, this.getArrayCreator())));
  }

  

  protected getArrayProtected(url: string) {

  }

  /**
   * @deprecated
   * Get data from url.
   * 
   * @param {string} url - service url (format: "/<service>").
   * @param {RequestOptions} options
   */
  protected get(url: string, options: RequestOptions) {
    let apiUrl = RestDataService.API_URL + url;

    return this.http.get(apiUrl, options)
      .map((res: Response) => new RestResponse(res, this.getCreator()))
      .catch((err: Response) => Observable.throw(new RestResponse(err, this.getCreator())));
  }

  protected getProtected(url: string) {
    let headers = new Headers({ 'Authorization': 'Bearer ' + AuthService.getCurrentAccessToken() });
    let options = new RequestOptions({ headers: headers });

    return this.get(url, options);
  }

  /**
   * Post data to url.
   * 
   * @param {string} url - service url (format: "/<service>").
   * @param {RestRequest} model - data to posting.
   * @param {RequestOptions} options
   */
  protected post(url: string, model: RestRequest, options: RequestOptions): Observable<RestResponse<T>> {
    let apiUrl = RestDataService.API_URL + url;
    let data = model.toRequest();

    return this.http.post(apiUrl, data, options)
      .map((res: Response) => new RestResponse(res, this.getCreator()))
      .catch((err: Response) => Observable.throw(new RestResponse(err, this.getCreator())));
  }

  protected postJson(url: string, model: RestRequest): Observable<RestResponse<T>> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.post(url, model, options)
  }

  protected postForm(url: string, model: RestRequest): Observable<RestResponse<T>> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    return this.post(url, model, options)
  }

}