import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { HeaderModule } from '../shared/header/header.module';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';
import { FilterComponent } from '../shared/filter/filter.component';


@NgModule({
    imports: [
        homeRouting,
        HeaderModule,
        TranslateModule
    ],
    declarations: [
        HomeComponent,
        FilterComponent
    ]
})
export class HomeModule { }
