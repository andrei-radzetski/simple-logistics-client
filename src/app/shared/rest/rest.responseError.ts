import { Response } from '@angular/http';
import { RestResponse } from './rest.response';

export class RestResponseError extends RestResponse {

   public code: number;
   public internalCode: number;
   public message: string;

   constructor(original: Response) {
     super(original);
     this.proccess();
   }

   protected proccess() {
     let raw = this.getRaw();

     if(raw) {
       this.internalCode = raw.internalCode;
       this.message = raw.message;
     } else {
       this.message = this.original.statusText;
     }

     this.code = this.original.status;
   }

}
