import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileInfoComponent } from './info/profile.info.component';
import { ProfileSettingsComponent } from './settings/profile.settings.component';
import { ProfileRequestsComponent } from './requests/profile.requests.component';
import { ProfileMessagesComponent } from './messages/profile.messages.component';
import { ProfileDictionariesComponent } from './dictionaries/profile.dictionaries.component';
import { ProfileMessageComponent } from './message/profile.message.component';
import { RouteCanActiveAuthorized } from '../shared/route/route.canActiveAuthorized';
import { RouteCanActiveAdmin } from '../shared/route/route.canActiveAdmin';
import { ProfileHistoriesComponent } from './histories/profile.histories.component';

const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [RouteCanActiveAuthorized],
    canActivateChild: [RouteCanActiveAuthorized],
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      {
        path: 'info',
        component: ProfileInfoComponent
      },
      {
        path: 'requests',
        component: ProfileRequestsComponent
      },
      {
        path: 'messages',
        component: ProfileMessagesComponent
      },
      {
        path: 'messages/read/:userId/:id',
        component: ProfileMessageComponent
      },
      {
        path: 'messages/create/:userId',
        component: ProfileMessageComponent
      },
      {
        path: 'settings',
        component: ProfileSettingsComponent
      },
      {
        path: 'dictionaries',
        component: ProfileDictionariesComponent,
        canActivate: [RouteCanActiveAdmin]
      },
      {
        path: 'histories',
        component: ProfileHistoriesComponent,
        canActivate: [RouteCanActiveAdmin]
      }
    ]
  }
];

export const profileRouting: ModuleWithProviders = RouterModule.forChild(profileRoutes);