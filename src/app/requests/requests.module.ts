import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests.component';
import { requestsRouting } from './requests.routing';
import { TranslateModule } from '../shared/translate/translate.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BusyModule } from '../shared/components/busy/busy.module';
import { BusyComponent } from '../shared/components/busy/busy.component';

@NgModule({
  imports: [
    requestsRouting,
    HeaderModule,
    TranslateModule,
    CommonModule,
    FormsModule,
    NgbModule,
    BusyModule
  ],
  declarations: [
    RequestsComponent
  ],
  entryComponents: [
    BusyComponent
  ],
})
export class RequestsModule {

}