import { RestModelFill } from '../rest/rest.modelFill'

export class User implements RestModelFill {

  id: string;
  email: string;
  phone: string;
  firstName: string;
  secondName: string;
  scope: string;

  fill(object: any): void {
    this.id = object.id;
    this.email = object.email;
    this.phone = object.phone;
    this.firstName = object.firstName;
    this.secondName = object.secondName;
    this.scope = object.scope;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.secondName;
  }

}