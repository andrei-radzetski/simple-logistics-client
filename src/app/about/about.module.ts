import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';

import { aboutRouting } from './about.routing';
import { AboutComponent } from './about.component'
import { HeaderModule } from '../shared/header';


@NgModule({
    imports: [
        aboutRouting,
        HeaderModule,
        TranslateModule
    ],
    declarations: [
        AboutComponent
    ]
})
export class AboutModule { }