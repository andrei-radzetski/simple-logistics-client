import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component'
import { HeaderComponent, SearchComponent } from '../shared';
import { homeRouting } from './home.routing';


@NgModule({
    imports: [
        homeRouting
    ],
    declarations: [
        HomeComponent,
        HeaderComponent,
        SearchComponent
    ]

})
export class HomeModule { }
