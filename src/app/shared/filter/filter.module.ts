import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { FilterComponent } from './filter.component';


@NgModule({
    imports: [
        TranslateModule,
        BrowserModule
    ],
    declarations: [
        FilterComponent
    ],
    exports: [
        FilterComponent
    ]
})
export class FilterModule { }