import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RequestComponent } from './request.component';

const requestRoutes: Routes = [
  {
    path: 'requests/:id',
    component: RequestComponent
  }
];

export const requestRouting: ModuleWithProviders = RouterModule.forChild(requestRoutes);