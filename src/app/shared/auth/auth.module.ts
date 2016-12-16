import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { RestModule } from '../rest/rest.module';

@NgModule({
  imports: [
    RestModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }