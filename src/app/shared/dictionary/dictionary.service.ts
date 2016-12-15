import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RestService } from '../rest/rest.service';
import { RestResponseArray } from '../rest/rest.responseArray';
import { Dictionary } from './dictionary';

@Injectable()
export class DictionaryService extends RestService<Dictionary> {

  constructor(http: Http) {
    super(http, { create: (): Dictionary => new Dictionary() });
  }

  getLanguages(): Observable<RestResponseArray<Dictionary>> {
    return this.getArray('/dictionaries/languages');
  }

  getCountries(): Observable<RestResponseArray<Dictionary>> {
    return this.getArray('/dictionaries/countries');
  }

}