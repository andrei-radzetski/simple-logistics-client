import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FilterComponent } from './filter.component';


@NgModule({
    imports: [
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