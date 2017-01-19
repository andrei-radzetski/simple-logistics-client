import { Injectable } from '@angular/core';
import { DictionaryService } from '../shared/dictionary/dictionary.service';
import { Dictionary } from '../shared/dictionary/dictionary';
import { RestResponseError } from '../shared/rest/rest.responseError';
import { RestResponseArray } from '../shared/rest/rest.responseArray';
import { Point } from '../shared/point/point';
import { Request } from '../shared/request/request';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import { RequestService } from '../shared/request/request.service';
import { RestResponseObject } from '../shared/rest/rest.responseObject';

@Injectable()
export class ApplyService {

  hours: string[];
  mins: string[];

  kinds: Dictionary[];
  services: Dictionary[];
  transports: Dictionary[];
  
  kind: Dictionary;
  kindInvalid: boolean = false;
  service: Dictionary;
  serviceInvalid: boolean = false;
  typeInvalid: boolean = false;
  
  places: number;
  placesInvalid: boolean = false;
  transport: Dictionary;
  transportInvalid: boolean = false;
  cargoName: string;
  cargoNameInvalid: boolean = false;
  cargoWidth: number;
  cargoWidthInvalid: boolean = false;
  cargoHeight: number;
  cargoHeightInvalid: boolean = false;
  cargoLength: number;
  cargoLengthInvalid: boolean = false;
  cargoWeight: number;
  cargoWeightInvalid: boolean = false;
  attrsInvalid: boolean = false;

  points: Point[];
  pointsInvalid: boolean = false;

  displayEmail: boolean = false;
  displayPhone: boolean = false;

  comment: string;

  invalid: boolean = false;

  constructor(private dictionaryService: DictionaryService, private requestService: RequestService) {
    this.kinds = new Array<Dictionary>();
    this.services = new Array<Dictionary>();
    this.transports = new Array<Dictionary>();
    this.points = new Array<Point>();
    this.hours = this.createTimeArray(24);
    this.mins = this.createTimeArray(60);
  }

  commit(): Observable<RestResponseObject<Request>> {
    if(this.validate()) {
      let request = new Request();
    
      request.kind = this.kind.key.toString();
      request.service = this.service.key.toString();
      
      request.seatsNumber = this.places;
      request.transport = this.transport.key.toString();
      request.name = this.cargoName;
      request.width = this.cargoWidth;
      request.height = this.cargoHeight;
      request.length = this.cargoLength;
      request.weight = this.cargoWeight;
      
      request.points = this.points;

      request.displayEmail = this.displayEmail;
      request.displayPhone = this.displayPhone;

      request.comment = this.comment;

      console.log(request);
      return this.requestService.create(request);
    }
  }

  validate(): boolean {
    let tv = this.isTypeValid();
    let at = this.isAttrsValid();
    let pv = this.isPointsValid();

    return tv && at && pv;
  }

  isAttrsValid(): boolean {
    this.placesInvalid = this.places == null || this.places < 1;
    this.transportInvalid = this.transport == null;
    this.cargoNameInvalid = this.isCargo() && (this.cargoName == null || this.cargoName.trim().length < 2);
    this.cargoWidthInvalid = this.isCargo() && (!this.isNumeric(this.cargoWidth) || this.cargoWidth == null || this.cargoWidth < 0);
    this.cargoHeightInvalid = this.isCargo() && (!this.isNumeric(this.cargoHeight) || this.cargoHeight == null || this.cargoHeight < 0);
    this.cargoLengthInvalid = this.isCargo() && (!this.isNumeric(this.cargoLength) || this.cargoLength == null || this.cargoLength < 0);
    this.cargoWeightInvalid = this.isCargo() && (!this.isNumeric(this.cargoWeight) || this.cargoWeight == null || this.cargoWeight < 0);
    this.attrsInvalid = this.placesInvalid || this.transportInvalid || this.cargoNameInvalid || this.cargoWidthInvalid 
                          || this.cargoHeightInvalid || this.cargoLengthInvalid || this.cargoWeightInvalid;

    return !this.attrsInvalid;
  }

  isTypeValid(): boolean {
    this.kindInvalid = this.kind == null;
    this.serviceInvalid = this.service == null;
    this.typeInvalid = this.kindInvalid || this.serviceInvalid;

    return !this.typeInvalid;
  }

  isPointsValid(): boolean {
    this.pointsInvalid = this.points == null || this.points.length < 2;

    return !this.pointsInvalid;
  }

  isNumeric(n: any) : n is number | string {
    return !isNaN(parseFloat(n)) && isFinite(n);
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

  isCargo(): boolean {
    return this.service && this.service.key === 'freight';
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