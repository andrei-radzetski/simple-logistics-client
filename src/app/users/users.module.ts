import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { UsersComponent } from './users.component';
import { usersRouting } from './users.routing';
import { TranslateModule } from '../shared/translate/translate.module';

@NgModule({
  imports: [
    usersRouting,
    HeaderModule,
    TranslateModule
  ],
  declarations: [
    UsersComponent
  ]
})
export class UsersModule {

}