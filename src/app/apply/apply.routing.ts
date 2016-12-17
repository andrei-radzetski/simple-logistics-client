import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ApplyComponent } from './apply.component';
import { RouteCanActiveAuthorized } from '../shared/route/route.canActiveAuthorized';

const applyRoutes: Routes = [
  {
    path: 'apply',
    component: ApplyComponent,
    canActivate: [ RouteCanActiveAuthorized ]
  }
];

export const applyRouting: ModuleWithProviders = RouterModule.forChild(applyRoutes);