import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../shared/header/header.module';
import { FormsModule } from '@angular/forms';
import { profileRouting } from './profile.routing';
import { TranslateModule } from '../shared/translate/translate.module';
import { UserModule } from '../shared/user/user.module';
import { AuthModule } from '../shared/auth/auth.module';
import { DictionaryModule } from '../shared/dictionary/dictionary.module';
import { ProfileComponent } from './profile.component';
import { ProfileInfoComponent } from './info/profile.info.component';
import { ProfileSettingsComponent } from './settings/profile.settings.component';
import { ProfileRequestsComponent } from './requests/profile.requests.component';
import { ProfileMessagesComponent } from './messages/profile.messages.component';
import { ProfileDictionariesComponent } from './dictionaries/profile.dictionaries.component';
import { RouteCanActiveAuthorized } from '../shared/route/route.canActiveAuthorized';
import { BusyModule } from '../shared/components/busy/busy.module';
import { BusyComponent } from '../shared/components/busy/busy.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    profileRouting,
    FormsModule,
    HeaderModule,
    TranslateModule,
    UserModule,
    AuthModule,
    DictionaryModule,
    BusyModule
  ],
  declarations: [
    ProfileComponent,
    ProfileInfoComponent,
    ProfileSettingsComponent,
    ProfileRequestsComponent,
    ProfileMessagesComponent,
    ProfileDictionariesComponent
  ], 
  providers: [
    RouteCanActiveAuthorized
  ],
  entryComponents: [
    BusyComponent
  ]  
})
export class ProfileModule { }