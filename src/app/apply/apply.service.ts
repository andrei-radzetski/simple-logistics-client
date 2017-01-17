import { Injectable } from '@angular/core';
import { DictionaryService } from '../shared/dictionary/dictionary.service';
import { Dictionary } from '../shared/dictionary/dictionary';
import { RestResponseError } from '../shared/rest/rest.responseError';
import { RestResponseArray } from '../shared/rest/rest.responseArray';
import { Point } from '../shared/point/point';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'

@Injectable()
export class ApplyService {

  hours: string[];
  mins: string[];

  kinds: Dictionary[];
  services: Dictionary[];
  transports: Dictionary[];
  
  kind: Dictionary;
  service: Dictionary;
  transport: Dictionary;

  points: Point[];

  constructor(private dictionaryService: DictionaryService) {
    this.kinds = new Array<Dictionary>();
    this.services = new Array<Dictionary>();
    this.transports = new Array<Dictionary>();
    this.points = new Array<Point>();
    this.hours = this.createTimeArray(24);
    this.mins = this.createTimeArray(60);
  }

  commit() {
    console.log(this.kind);
    console.log(this.service);
    console.log(this.transport);
    console.log(this.points);
  }

  initDictionares(): Observable<Boolean> {
    return this.dictionaryService.getRequestKinds()
      .flatMap((res: RestResponseArray<Dictionary>) => { 
        this.onKindsReceived(res.array);
        return this.dictionaryService.getRequestServices();
      })
      .flatMap((res: RestResponseArray<Dictionary>) => { 
        this.onServicesReceived(res.array);
        return this.dictionaryService.getTrasports();
      })
      .flatMap((res: RestResponseArray<Dictionary>) => { 
        this.onTransportsReceived(res.array);
        return Observable.of(true);
      })
  }

  onKindsReceived(kinds: Dictionary[]) {
    this.kinds = kinds;
    this.onKindChanged(this.kinds.length > 0 ? this.kinds[0] : undefined)
  }

  onServicesReceived(services: Dictionary[]) {
    this.services = services;
    this.onServiceChanged(this.services.length > 0 ? this.services[0] : undefined)
  }

  onTransportsReceived(transports: Dictionary[]) {
    this.transports = transports;
    this.onTransportChanged(this.transports.length > 0 ? this.transports[0] : undefined)
  }

  onKindChanged(value: Dictionary) {
    this.kind = value;
  }

  onServiceChanged(value: Dictionary) {
    this.service = value;
  }

  onTransportChanged(value: Dictionary) {
    this.transport = value;
  }

  private createTimeArray(max: number): string[] {
    let arr = [];
    for(let i = 0; i < max; i++) {
        let number = i.toString();
        if(i < 10) number = '0' + i;
        arr.push(number);
    }
    return arr;
  }

}