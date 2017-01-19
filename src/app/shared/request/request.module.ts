import { NgModule } from '@angular/core';
import { RequestService } from './request.service';
import { RestModule } from '../rest/rest.module';

@NgModule({
  imports: [
    RestModule
  ],
  providers: [
    RequestService
  ]
})
export class RequestModule { }