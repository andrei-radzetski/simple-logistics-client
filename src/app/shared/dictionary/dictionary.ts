import { RestObject } from '../rest/rest.object';

export class Dictionary extends RestObject {

  constructor(private type?: String, private key?: String, private value?: String) {
    super()
  }

  fill(object: any): void {
    this.id = object.id;
    this.key = object.key;
    this.value = object.value;
    this.type = object.type;
  }

}
