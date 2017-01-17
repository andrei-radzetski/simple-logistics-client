import { Injectable } from '@angular/core';
import { RestHttp } from '../rest/rest.http';
import { RestService } from '../rest/rest.service';
import { RestResponseArray } from '../rest/rest.responseArray';
import { Geo } from './geo';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeoService extends RestService<Geo> {

  constructor(http: RestHttp) {
    super(http, { create: (): Geo => new Geo() });
  }

  find(name: string): Observable<RestResponseArray<Geo>> {
    return this.getArray('/geo/' + name );
  }

}
