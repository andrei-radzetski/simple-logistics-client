import { Response } from '@angular/http';
import { RestModelFill } from './rest.modelFill';
import { RestResponse } from './rest.response';
import { RestCreator } from './rest.creator';

export class RestArrayResponse<T extends Array<RestModelFill>> extends RestResponse<T> {

  constructor(original: Response, creator: RestCreator<T>) {
    super(original, creator);
  }

  protected fillData(rawData: any): void {
    //this.data.fill(rawData);
    this.error = false;
  }

}