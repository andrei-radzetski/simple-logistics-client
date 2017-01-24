import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';
import { requestRouting } from './request.routing';
import { TranslateModule } from '../shared/translate/translate.module';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { BusyModule } from '../shared/components/busy/busy.module';
import { BusyComponent } from '../shared/components/busy/busy.component';

@NgModule({
  imports: [
    requestRouting,
    HeaderModule,
    TranslateModule,
    CommonModule,
    FormsModule,
    AgmCoreModule,
    BusyModule
  ],
  declarations: [
    RequestComponent
  ],
  entryComponents: [
    BusyComponent
  ]
})
export class RequestModule {

}