import { NgModule } from '@angular/core';

import { JoinComponent }   from './join.component';
import { joinRouting } from './join.routing';


@NgModule({
    imports: [
        joinRouting
    ],
    declarations: [
        JoinComponent
    ]
})
export class JoinModule { }