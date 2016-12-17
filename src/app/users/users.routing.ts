import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { UsersComponent } from './users.component';

const usersRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  }
];

export const usersRouting: ModuleWithProviders = RouterModule.forChild(usersRoutes);