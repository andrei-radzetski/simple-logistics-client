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

  fill(object: any) {

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

}