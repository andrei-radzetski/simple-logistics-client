import { NgModule } from '@angular/core';

import { HeaderModule } from '../shared/header/header.module';
import { JoinComponent }   from './join.component';
import { joinRouting } from './join.routing';


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