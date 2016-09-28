import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { JoinComponent }   from './join.component';
import { joinRouting } from './join.routing';
import { HeaderModule } from '../shared/header';


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