import { Response } from '@angular/http';
import { RestObject } from './rest.object';
import { RestObjectCreator } from './rest.objectCreator';
import { RestResponse } from './rest.response';

export class RestResponseSimpleArray<T> extends RestResponse {

  public array: T[];

  constructor(original: Response) {
    super(original);
    this.array = new Array<T>();
    this.proccess();
  }

  protected proccess() {
    let raws = this.getRaw();

    if (raws && Array.isArray(raws)) {
      for (let raw of raws) {
        this.array.push(raw);
      }
    }
  }

}