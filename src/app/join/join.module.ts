import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { JoinComponent } from './join.component';
import { joinRouting } from './join.routing';
import { TranslateModule } from '../shared/translate/translate.module';
import { RouteCanActiveUnauthorized } from '../shared/route/route.canActiveUnauthorized';

@NgModule({
  imports: [
    joinRouting,
    HeaderModule,
    TranslateModule
  ],
  declarations: [
    JoinComponent
  ],
  providers: [
    RouteCanActiveUnauthorized
  ]
})
export class JoinModule { }