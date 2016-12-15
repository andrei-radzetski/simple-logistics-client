import { RestObject } from '../rest/rest.object';

export class Auth extends RestObject {

  accessToken: string;
  expires: number;

  fill(object: any): void {
    this.accessToken = object.accessToken;
    this.expires = object.expires;
  }

}
