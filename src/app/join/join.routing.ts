import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinComponent } from './join.component'

const joinRoutes: Routes = [
  {
    path: 'join',
    component: JoinComponent
  }
];

export const joinRouting: ModuleWithProviders = RouterModule.forChild(joinRoutes);