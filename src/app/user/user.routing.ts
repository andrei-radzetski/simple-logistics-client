import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UserInfoComponent } from './info/user.info.component';
import { UserComponent } from './user.component';
import { RouteCanActiveAuthorized } from '../shared/route/route.canActiveAuthorized';

const userRoutes: Routes = [
   {
    path: 'users/:id',
    component: UserComponent,
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
        component: UserInfoComponent
      },
      {
        path: 'requests',
        component: UserInfoComponent
      }
    ]
  }
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);