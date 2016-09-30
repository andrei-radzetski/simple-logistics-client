import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AboutComponent } from './about.component'


const aboutRoutes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
