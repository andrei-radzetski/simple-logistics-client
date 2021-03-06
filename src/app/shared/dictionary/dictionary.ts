import { RestObject } from '../rest/rest.object';
import { RestRequest } from '../rest/rest.request';

export class Dictionary extends RestObject implements RestRequest {

  constructor(public type?: String, public key?: String, public value?: String, public description?: String) {
    super()
  }

  fill(object: any): void {
    this.id = object.id;
    this.key = object.key;
    this.value = object.value;
    this.type = object.type;
    this.description = object.description;
  }

  toRequest(): string {
    return JSON.stringify(this);
  }

  getTranslateKey() {
    return `dict.${this.type}.${this.key}`;
  }

}
