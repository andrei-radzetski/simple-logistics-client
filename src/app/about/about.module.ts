import { NgModule } from '@angular/core';

import { aboutRouting } from './about.routing';
import { AboutComponent } from './about.component'
import { HeaderModule } from '../shared/header';


@NgModule({
    imports: [
        aboutRouting,
        HeaderModule
    ],
    declarations: [
        AboutComponent
    ]
})
export class AboutModule { }