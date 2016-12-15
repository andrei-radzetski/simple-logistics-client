import { RestObject } from '../rest/rest.object';

export class Dictionary extends RestObject {

  key: string;
  value: string;
  type: string;

  fill(object: any): void {
    this.id = object.id;
    this.key = object.key;
    this.value = object.value;
    this.type = object.type;
  }

}
