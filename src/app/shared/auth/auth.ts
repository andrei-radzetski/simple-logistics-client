import { RestObject } from '../rest/rest.object';

export class Auth extends RestObject {

  accessToken: string;
  expires: number;
  scope: string;
  user: string;

  fill(object: any): void {
    this.accessToken = object.accessToken;
    this.expires = object.expires;
    this.scope = object.scope;
    this.user = object.user;
  }

}
