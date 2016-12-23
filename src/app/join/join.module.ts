import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { JoinComponent } from './join.component';
import { joinRouting } from './join.routing';
import { TranslateModule } from '../shared/translate/translate.module';
import { RouteCanActiveUnauthorized } from '../shared/route/route.canActiveUnauthorized';
import { UserModule } from '../shared/user/user.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    joinRouting,
    HeaderModule,
    TranslateModule,
    FormsModule,
    UserModule
  ],
  declarations: [
    JoinComponent
  ],
  providers: [
    RouteCanActiveUnauthorized
  ]
})
export class JoinModule { }