import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FilterComponent } from './filter.component';
import { TranslateModule } from '../translate/translate.module';


@NgModule({
    imports: [
        BrowserModule,
        TranslateModule
    ],
    declarations: [
        FilterComponent
    ],
    exports: [
        FilterComponent
    ]
})
export class FilterModule { }