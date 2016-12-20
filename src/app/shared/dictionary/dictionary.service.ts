import { Injectable } from '@angular/core';
import { RestHttp } from '../rest/rest.http';
import { Observable } from 'rxjs/Observable';
import { RestService } from '../rest/rest.service';
import { RestResponseArray } from '../rest/rest.responseArray';
import { RestResponseObject } from '../rest/rest.responseObject';
import { RestResponseSimpleArray } from '../rest/rest.responseSimpleArray';
import { Dictionary } from './dictionary';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class DictionaryService extends RestService<Dictionary> {

  constructor(http: RestHttp) {
    super(http, { create: (): Dictionary => new Dictionary() });
  }

  getTypes(): Observable<RestResponseSimpleArray<String>> {
    return this.getSimpleArray<String>('/dictionaries/types')
  }

  getLanguages(): Observable<RestResponseArray<Dictionary>> {
    return this.getArray('/dictionaries/languages');
  }

  getCountries(): Observable<RestResponseArray<Dictionary>> {
    return this.getArray('/dictionaries/countries');
  }

  getRequestKinds(): Observable<RestResponseArray<Dictionary>> {
    return this.getArray('/dictionaries/request/kinds');
  }

  getRequestServices(): Observable<RestResponseArray<Dictionary>> {
    return this.getArray('/dictionaries/request/servives');
  }

  getTrasports(): Observable<RestResponseArray<Dictionary>> {
    return this.getArray('/dictionaries/transports');
  }

  getByType(type: String): Observable<RestResponseArray<Dictionary>> {
    let params = new URLSearchParams();
    params.set( 'type', type ? type.toString() : '' )
    return this.getArray('/dictionaries/filter', params);
  }

  create(model: Dictionary): Observable<RestResponseObject<Dictionary>> {
    return this.postOne('/dictionaries', model);
  }

}