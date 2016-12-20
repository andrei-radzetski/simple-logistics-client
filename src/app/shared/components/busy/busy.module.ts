import { NgModule } from '@angular/core';
import { BusyComponent } from './busy.component';
import { BusyContent } from './busy.content';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgbModule
  ],
  declarations: [
    BusyComponent,
    BusyContent
  ],
  entryComponents: [
    BusyContent
  ],
  exports: [
    BusyComponent
  ]
})
export class BusyModule { }