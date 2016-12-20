import { Response } from '@angular/http';
import { RestResponse } from './rest.response';

export class RestResponseSimpleObject<T> extends RestResponse {

  public object: T;

  constructor(original: Response) {
    super(original)
    this.proccess();
  }

  protected proccess() {
    let raw = this.getRaw();

    if (raw) {
      this.object = raw;
    }
  }

}
