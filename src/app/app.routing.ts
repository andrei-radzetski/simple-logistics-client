import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { aboutRoutes } from './about';


const appRoutes: Routes = [
    ...aboutRoutes,
    {
        path: '**',
        redirectTo: '/home'
    }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
