import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component'
import { aboutRouting } from './about.routing';
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