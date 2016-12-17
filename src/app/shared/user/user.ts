import { RestObject } from '../rest/rest.object';
import { RestRequest } from '../rest/rest.request';

export class User extends RestObject implements RestRequest {

  email: string;
  phone: string;
  firstName: string;
  secondName: string;
  country: string;
  city: string;
  language: string;
  additionalInfo: string;
  confirmed: boolean;
  scope: string;

  fill(object: any): void {
    this.id = object.id;
    this.email = object.email;
    this.phone = object.phone;
    this.firstName = object.firstName;
    this.secondName = object.secondName;
    this.country = object.country;
    this.city = object.city;
    this.language = object.language;
    this.additionalInfo = object.additionalInfo;
    this.confirmed = object.confirmed;
    this.scope = object.scope;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.secondName;
  }

  toRequest(): string {
    return JSON.stringify(this);
  }

}