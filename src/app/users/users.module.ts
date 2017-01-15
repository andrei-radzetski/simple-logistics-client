import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { UsersComponent } from './users.component';
import { usersRouting } from './users.routing';
import { TranslateModule } from '../shared/translate/translate.module';
import { UserModule } from '../shared/user/user.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BusyModule } from '../shared/components/busy/busy.module';
import { BusyComponent } from '../shared/components/busy/busy.component';

@NgModule({
  imports: [
    usersRouting,
    HeaderModule,
    TranslateModule,
    UserModule,
    FormsModule,
    CommonModule,
    BusyModule
  ],
  declarations: [
    UsersComponent
  ],
  entryComponents: [
    BusyComponent
  ]
})
export class UsersModule {

}