import { RestObject } from '../rest/rest.object';
import { RestRequest } from '../rest/rest.request';

export class Dictionary extends RestObject implements RestRequest {

  constructor(private type?: String, private key?: String, private value?: String) {
    super()
  }

  fill(object: any): void {
    this.id = object.id;
    this.key = object.key;
    this.value = object.value;
    this.type = object.type;
  }

  toRequest(): string {
    return JSON.stringify(this);
  }

}
