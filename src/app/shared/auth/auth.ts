import { RestModelFill } from '../rest/rest.modelFill'

export class Auth implements RestModelFill {

  accessToken: string;
  expires: number;

  fill(object: any): void {
    this.accessToken = object.accessToken;
    this.expires = object.expires;
  }

}