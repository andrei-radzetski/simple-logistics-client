import { NgModule } from '@angular/core';

import { JoinComponent }   from './join.component';
import { joinRouting } from './join.routing';
import { HeaderModule } from '../shared/header';


@NgModule({
    imports: [
        joinRouting,
        HeaderModule
    ],
    declarations: [
        JoinComponent
    ]
})
export class JoinModule { }