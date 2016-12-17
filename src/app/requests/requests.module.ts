import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { FilterModule } from '../shared/filter/filter.module';
import { RequestsComponent } from './requests.component';
import { requestsRouting } from './requests.routing';
import { TranslateModule } from '../shared/translate/translate.module';

@NgModule({
  imports: [
    requestsRouting,
    HeaderModule,
    FilterModule,
    TranslateModule
  ],
  declarations: [
    RequestsComponent
  ]
})
export class RequestsModule {

}