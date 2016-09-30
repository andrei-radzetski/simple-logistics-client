import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const appRoutes: Routes = [
    {
        path: '**',
        redirectTo: '/home'
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
