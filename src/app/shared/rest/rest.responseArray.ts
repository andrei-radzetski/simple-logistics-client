import { Response } from '@angular/http';
import { RestObject } from './rest.object';
import { RestObjectCreator } from './rest.objectCreator';
import { RestResponse } from './rest.response';

export class RestResponseArray<T extends RestObject> extends RestResponse {

  public array: T[];
  private creator: RestObjectCreator<T>;

  constructor(original: Response, creator: RestObjectCreator<T>) {
    super(original);
    this.creator = creator;
    this.array = new Array<T>();
    this.proccess();
  }

  protected proccess() {
    let raws = this.getRaw();

    if (raws && Array.isArray(raws)) {
      for (let raw of raws) {
        let obj = this.creator.create();
        obj.fill(raw);
        this.array.push(obj);
      }
    }
  }

}