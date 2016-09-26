import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { JoinComponent } from './join.component'


const joinRoutes: Routes = [
    {
        path: 'join',
        component: JoinComponent
    }
];

export const joinRouting: ModuleWithProviders = RouterModule.forChild(joinRoutes);