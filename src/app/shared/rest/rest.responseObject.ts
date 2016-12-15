import { Response } from '@angular/http';
import { RestObject } from './rest.object';
import { RestObjectCreator } from './rest.objectCreator';
import { RestResponse } from './rest.response';

export class RestResponseObject<T extends RestObject> extends RestResponse {

  public object: T;
  private creator: RestObjectCreator<T>;

  constructor(original: Response, creator: RestObjectCreator<T>) {
    super(original)
    this.creator = creator;
    this.proccess();
  }

  protected proccess() {
    let raw = this.getRaw();

    if (raw) {
      let obj = this.creator.create();
      obj.fill(raw);
      this.object = obj;
    }
  }

}
