import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component'
import { SearchComponent } from '../shared/search'

import { homeRouting } from './home.routing';

@NgModule({
    imports: [
        homeRouting
    ],
    declarations: [
        HomeComponent,
        SearchComponent
    ]
})
export class HomeModule { }
