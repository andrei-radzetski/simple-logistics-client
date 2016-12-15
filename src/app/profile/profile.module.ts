import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { FormsModule } from '@angular/forms';
import { profileRouting } from './profile.routing';
import { TranslateModule } from '../shared/translate/translate.module';
import { UserModule } from '../shared/user/user.module';
import { ProfileComponent } from './profile.component';
import { ProfileInfoComponent } from './info/profile.info.component';
import { ProfileSettingsComponent } from './settings/profile.settings.component';
import { ProfileRequestsComponent } from './requests/profile.requests.component';
import { ProfileMessagesComponent } from './messages/profile.messages.component';

@NgModule({
  imports: [
    profileRouting,
    FormsModule,
    HeaderModule,
    TranslateModule,
    UserModule
  ],
  declarations: [
    ProfileComponent,
    ProfileInfoComponent,
    ProfileSettingsComponent,
    ProfileRequestsComponent,
    ProfileMessagesComponent
  ]
})
export class ProfileModule { }