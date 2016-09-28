import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { AboutComponent } from './about.component'
import { aboutRouting } from './about.routing';
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