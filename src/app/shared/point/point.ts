import { RestObject } from '../rest/rest.object';
import { RestRequest } from '../rest/rest.request';

export class Point extends RestObject implements RestRequest {

  latitude: number;
  longitude: number;
  name: string;
  radius: number;
  radiusUnitFactor: number;
  start: boolean;
  end: boolean;
  arrivalDatetime: Date;
  departureDatetime: Date;
  order: number;
  placeId: string;
  editable: boolean;

  fill(object: any) {
    this.id = object.id;
    this.latitude = object.latitude;
    this.longitude = object.longitude;
    this.name = object.name;
    this.radius = object.radius;
    this.radiusUnitFactor = object.radiusUnitFactor;
    this.start = object.start;
    this.end = object.end;
    this.arrivalDatetime = object.arrivalDatetime;
    this.departureDatetime = object.departureDatetime;
    this.order = object.order;
    this.placeId = object.placeId;
  }

  toRequest(): string {
    return JSON.stringify(this);
  }

  getOffsetOrderStr(): string {
    return this.order != null ? (this.order + 1).toString() : undefined;
  }

  getArrivalHourStr(): string {
    return this.arrivalDatetime ? this.getTimeStr(this.arrivalDatetime.getHours()) : undefined;
  }

  getArrivalMinStr(): string {
    return this.arrivalDatetime ? this.getTimeStr(this.arrivalDatetime.getMinutes()) : undefined;
  }

  getDepartureHourStr(): string {
    return this.departureDatetime ? this.getTimeStr(this.departureDatetime.getMinutes()) : undefined;
  }

  getDepartureMinStr(): string {
    return this.departureDatetime ? this.getTimeStr(this.departureDatetime.getMinutes()) : undefined;
  }

  private getTimeStr(time: number): string {
    return time < 10 ? ('0'+ time) : time.toString();
  }

  getDisplay(): string {
    return `${this.order + 1}. ${this.name}`;
  }

}