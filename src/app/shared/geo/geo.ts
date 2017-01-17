import { RestObject } from '../rest/rest.object';
import { RestRequest } from '../rest/rest.request';

export class Geo extends RestObject implements RestRequest {

  name: string;
  fullName: string;
  latitude: number;
  longitude: number;
  placeId: string;

  fill(object: any): void {
    this.name = object.name
    this.fullName = object.fullName
    this.latitude = object.latitude
    this.longitude = object.longitude
    this.placeId = object.placeId
  }

  getDisplay() {
    return `${this.name} (${this.fullName})`;
  }

  toRequest(): string {
    return JSON.stringify(this);
  }

}