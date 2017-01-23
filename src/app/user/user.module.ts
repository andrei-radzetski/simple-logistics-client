import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { UserComponent } from './user.component';
import { UserInfoComponent } from './info/user.info.component';
import { userRouting } from './user.routing';
import { TranslateModule } from '../shared/translate/translate.module';
import { UserModule } from '../shared/user/user.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BusyModule } from '../shared/components/busy/busy.module';
import { BusyComponent } from '../shared/components/busy/busy.component';

@NgModule({
  imports: [
    userRouting,
    HeaderModule,
    TranslateModule,
    UserModule,
    FormsModule,
    CommonModule,
    BusyModule
  ],
  declarations: [
    UserComponent,
    UserInfoComponent
  ],
  entryComponents: [
    BusyComponent
  ]
})
export class UserPageModule {

}