import { RestModelFill } from '../rest/rest.modelFill'

export class User implements RestModelFill {

  id: string;
  email: string;
  phone: string;
  firstName: string;
  secondName: string;

  fill(object: any): void {
    this.id = object.id;
    this.email = object.email;
    this.phone = object.phone;
    this.firstName = object.firstName;
    this.secondName = object.secondName;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.secondName;
  }

}