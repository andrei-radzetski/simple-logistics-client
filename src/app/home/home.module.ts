import { NgModule } from '@angular/core';

import { HeaderModule } from '../shared/header/header.module';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';
import { FilterModule } from '../shared/filter/filter.module';


@NgModule({
    imports: [
        homeRouting,
        HeaderModule,
        FilterModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {}
