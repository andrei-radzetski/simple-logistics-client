import { Injectable } from '@angular/core';
import { RestHttp } from '../rest/rest.http';
import { Observable } from 'rxjs/Observable';
import { RestService } from '../rest/rest.service';
import { RestResponseObject } from '../rest/rest.responseObject';
import { RestResponseArray } from '../rest/rest.responseArray';
import { Request } from './request';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class RequestService extends RestService<Request> {

  constructor(http: RestHttp) {
    super(http, { create: (): Request => new Request() });
  }

  filter(params?: URLSearchParams): Observable<RestResponseArray<Request>> {
    return this.getArray('/requests/filter', params);
  }

  get(id: string): Observable<RestResponseObject<Request>> {
    return this.getOne('/requests/' + id);
  }

  update(model: Request): Observable<RestResponseObject<Request>> {
    return this.putOne('/requests', model);
  }

  create(model: Request): Observable<RestResponseObject<Request>> {
    return this.postOne('/requests', model);
  }

}
