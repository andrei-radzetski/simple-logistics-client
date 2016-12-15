import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component'
import { RouteCanActiveUnauthorized } from '../shared/route/route.canActiveUnauthorized';

const loginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ RouteCanActiveUnauthorized ]
  }
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);