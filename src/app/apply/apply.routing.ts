import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ApplyComponent } from './apply.component';
import { RouteCanActiveAuthorized } from '../shared/route/route.canActiveAuthorized';
import { ApplyTypeComponent } from './type/apply.type.component';
import { ApplyAttributesComponent } from './attributes/apply.attributes.component';
import { ApplyPointsComponent } from './points/apply.points.component';
import { ApplySecurityComponent } from './security/apply.security.component';
import { ApplyExtraComponent } from './extra/apply.extra.component';

const applyRoutes: Routes = [
  {
    path: 'apply',
    component: ApplyComponent,
    canActivate: [RouteCanActiveAuthorized],
    canActivateChild: [RouteCanActiveAuthorized],
    children: [
      {
        path: '',
        redirectTo: 'type',
        pathMatch: 'full'
      },
      {
        path: 'type',
        component: ApplyTypeComponent
      },
      {
        path: 'attributes',
        component: ApplyAttributesComponent
      },
      {
        path: 'points',
        component: ApplyPointsComponent
      },
      {
        path: 'security',
        component: ApplySecurityComponent
      },
      {
        path: 'extra',
        component: ApplyExtraComponent
      }
    ]
  }
];

export const applyRouting: ModuleWithProviders = RouterModule.forChild(applyRoutes);