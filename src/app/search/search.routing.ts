import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SearchComponent } from './search.component';


const searchRoutes: Routes = [
    {
        path: 'search',
        component: SearchComponent
    }
];

export const searchRouting: ModuleWithProviders = RouterModule.forChild(searchRoutes);