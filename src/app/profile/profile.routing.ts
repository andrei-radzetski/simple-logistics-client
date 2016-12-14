import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileInfoComponent } from './info/profile.info.component';
import { ProfileSettingsComponent } from './settings/profile.settings.component';
import { ProfileRequestsComponent } from './requests/profile.requests.component';

const profileRoutes: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        children: [
            { 
                path: '',
                redirectTo: 'info'
            },
            { 
                path: 'info',
                component: ProfileInfoComponent
            },
            { 
                path: 'settings',
                component: ProfileSettingsComponent
            },
            { 
                path: 'requests',
                component: ProfileRequestsComponent
            }
        ]
    }
];

export const profileRouting: ModuleWithProviders = RouterModule.forChild(profileRoutes);