import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests.component';
import { requestsRouting } from './requests.routing';
import { TranslateModule } from '../shared/translate/translate.module';

@NgModule({
  imports: [
    requestsRouting,
    HeaderModule,
    TranslateModule,
    CommonModule
  ],
  declarations: [
    RequestsComponent
  ]
})
export class RequestsModule {

}