import { RestModelFill } from '../rest/rest.modelFill'

export class Dictionary implements RestModelFill {

  id: string;
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