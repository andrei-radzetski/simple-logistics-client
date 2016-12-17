import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { RequestsComponent } from './requests.component';
import { requestsRouting } from './requests.routing';
import { TranslateModule } from '../shared/translate/translate.module';

@NgModule({
  imports: [
    requestsRouting,
    HeaderModule,
    TranslateModule
  ],
  declarations: [
    RequestsComponent
  ]
})
export class RequestsModule {

}