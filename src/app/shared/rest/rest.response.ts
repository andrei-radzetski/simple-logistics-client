import { Response } from '@angular/http';
import { RestObjectCreator } from './rest.objectCreator';

export abstract class RestResponse {

  public original: Response;
  public count: number;

  constructor(original: Response) {
    this.original = original;
  }

  /**
   * Proccess original response. 
   */
  protected abstract proccess(): void;

  protected getRaw(): any {
    let temp = this.original.json();
    this.count = temp ? temp.count : undefined;
    return temp ? temp.response : undefined;
  }

}