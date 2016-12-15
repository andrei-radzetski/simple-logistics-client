import { Response } from '@angular/http';
import { RestModelFill } from './rest.modelFill';
import { RestCreator } from './rest.creator';

export class RestResponse<T extends RestModelFill> {

  public original: Response;
  public error: boolean;
  public data: T;
  public message: string;
  public code: number;
  public internalCode: number;

  protected creator: RestCreator<T>;

  constructor(original: Response, creator: RestCreator<T>) {
    this.original = original;
    this.error = false;
    this.creator = creator;
    this.proccess();
  }

  /**
   * Proccess original response. 
   */
  private proccess(): void {
    let jsonData = this.original.json();
    this.code = this.original.status;

    if (!this.original.ok && jsonData == null) {
      return this.fillGlobalError(this.original);
    }

    if (!this.original.ok && jsonData.error) {
      this.fillError(jsonData);
    } else if (jsonData.response) {
      this.createNewObject();
      this.fillData(jsonData.response)
    } 
      
    this.error = false;
  }

  protected fillData(rawData: any): void {
    this.data.fill(rawData);
    this.error = false;
  }

  protected fillError(rawData: any): void {
    this.error = rawData.error;
    this.internalCode = rawData.internalCode;
    this.message = rawData.message;
  }

  protected fillGlobalError(res: Response): void {
    this.message = res.statusText;
    this.error = !res.ok;
  }

  protected createNewObject(): void {
    this.data = this.creator.create()
  }

}