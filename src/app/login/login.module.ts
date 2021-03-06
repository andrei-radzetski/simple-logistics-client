import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../shared/header/header.module';
import { LoginComponent } from './login.component';
import { loginRouting } from './login.routing';
import { TranslateModule } from '../shared/translate/translate.module';
import { AuthModule } from '../shared/auth/auth.module';
import { RouteCanActiveUnauthorized } from '../shared/route/route.canActiveUnauthorized';

@NgModule({
  imports: [
    loginRouting,
    HeaderModule,
    TranslateModule,
    FormsModule,
    AuthModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    RouteCanActiveUnauthorized
  ]
})
export class LoginModule { }