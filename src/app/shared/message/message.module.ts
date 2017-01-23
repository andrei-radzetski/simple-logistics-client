import { NgModule } from '@angular/core';
import { MessageService } from './message.service';
import { RestModule } from '../rest/rest.module';

@NgModule({
  imports: [
    RestModule
  ],
  providers: [
    MessageService
  ]
})
export class MessageModule { }