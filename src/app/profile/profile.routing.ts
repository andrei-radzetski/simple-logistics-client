import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileInfoComponent } from './info/profile.info.component';
import { ProfileSettingsComponent } from './settings/profile.settings.component';
import { ProfileRequestsComponent } from './requests/profile.requests.component';
import { ProfileMessagesComponent } from './messages/profile.messages.component';
import { RouteCanActiveAuthorized } from '../shared/route/route.canActiveAuthorized';

const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ RouteCanActiveAuthorized ],
    canActivateChild: [ RouteCanActiveAuthorized ],
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
        path: 'settings',
        component: ProfileSettingsComponent
      }
    ]
  }
];

export const profileRouting: ModuleWithProviders = RouterModule.forChild(profileRoutes);