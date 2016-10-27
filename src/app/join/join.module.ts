import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';

import { HeaderModule } from '../shared/header/header.module';
import { JoinComponent }   from './join.component';
import { joinRouting } from './join.routing';


@NgModule({
    imports: [
        joinRouting,
        HeaderModule,
        TranslateModule
    ],
    declarations: [
        JoinComponent
    ]
})
export class JoinModule { }