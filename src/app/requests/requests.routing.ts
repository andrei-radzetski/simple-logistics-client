import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RequestsComponent } from './requests.component';

const requestsRoutes: Routes = [
  {
    path: 'requests',
    component: RequestsComponent
  }
];

export const requestsRouting: ModuleWithProviders = RouterModule.forChild(requestsRoutes);