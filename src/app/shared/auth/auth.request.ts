import { RestRequest } from '../rest/rest.request'

export class AuthRequest implements RestRequest {

  username: string;
  password: string;
  remember: boolean;

  constructor(username?: string, password?: string, remember: boolean = false) {
    this.username = username;
    this.password = password;
    this.remember = remember;
  }

  toRequest(): string {
    return 'username=' + this.username +
      '&password=' + this.password +
      '&remember=' + this.remember;
  }
}