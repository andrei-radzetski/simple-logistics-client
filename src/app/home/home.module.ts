import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component'
import { SearchComponent, HeaderModule } from '../shared';
import { homeRouting } from './home.routing';


@NgModule({
    imports: [
        homeRouting,
        HeaderModule
    ],
    declarations: [
        HomeComponent,
        SearchComponent
    ]
})
export class HomeModule { }
