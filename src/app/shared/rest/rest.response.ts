import { Response } from '@angular/http';
import { RestModelFill } from './rest.modelFill';

export class RestResponse<T extends RestModelFill> {

  original: Response;
  error: boolean;
  data: T;
  message: string;
  code: number;
  internalCode: number;

  constructor(original: Response, creator: { new (): T; }) {
    this.original = original;
    this.error = false;
    this.proccess(creator);
  }

  /**
   * Proccess original response. 
   */
  private proccess(creator: { new (): T; }): void {
    let jsonData = this.original.json();
    this.code = this.original.status;

    if(!this.original.ok && jsonData == null) {
      this.message = this.original.statusText;
      this.error = true;
      return;
    }

    if(!this.original.ok && jsonData.error) {
      this.error = true;
      this.internalCode = jsonData.internalCode;
      this.message = jsonData.message;
    } else if(jsonData.response) {
      this.data = new creator();
      this.data.fill(jsonData.response);
      this.error = false;
    } else {
      this.error = false;
    }
  }

}