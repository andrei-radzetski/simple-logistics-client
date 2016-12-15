import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinComponent } from './join.component'
import { RouteCanActiveUnauthorized } from '../shared/route/route.canActiveUnauthorized';

const joinRoutes: Routes = [
  {
    path: 'join',
    component: JoinComponent,
    canActivate: [ RouteCanActiveUnauthorized ]
  }
];

export const joinRouting: ModuleWithProviders = RouterModule.forChild(joinRoutes);