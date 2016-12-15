import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { RestDataService } from '../rest/rest.dataService'
import { Dictionary } from './dictionary';
import { RestResponse } from '../rest/rest.response';
import { RestArrayResponse } from '../rest/rest.arrayResponse';
import { RestCreator } from '../rest/rest.creator';

@Injectable()
export class DictionaryService extends RestDataService<Dictionary> {

  constructor(http: Http) {
    super(http);
  }

  getCreator(): RestCreator<Dictionary> {
    return { create: (): Dictionary => new Dictionary() }
  }

  getArrayCreator(): RestCreator<Array<Dictionary>> {
    return { create: (): Array<Dictionary> => new Array<Dictionary>() };
  }

  getLanguages(): Observable<RestArrayResponse<Array<Dictionary>>> {
    return this.getArray ('/dictionaries/languages', undefined);
  }

  getCountries() {
    return this.get ('/dictionaries/countries', undefined);
  }

}