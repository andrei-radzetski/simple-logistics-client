import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ApplyComponent } from './apply.component';

const applyRoutes: Routes = [
  {
    path: 'apply',
    component: ApplyComponent
  }
];

export const applyRouting: ModuleWithProviders = RouterModule.forChild(applyRoutes);