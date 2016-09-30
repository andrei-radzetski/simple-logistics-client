import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { HomeComponent } from './home.component'
import { FilterComponent, HeaderModule } from '../shared';
import { homeRouting } from './home.routing';


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
