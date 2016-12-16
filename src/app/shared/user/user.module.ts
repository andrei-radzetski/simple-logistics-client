import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { RestModule } from '../rest/rest.module';

@NgModule({
  imports: [
    RestModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }