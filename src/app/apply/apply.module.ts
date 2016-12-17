import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { ApplyComponent } from './apply.component';
import { applyRouting } from './apply.routing';
import { TranslateModule } from '../shared/translate/translate.module';

@NgModule({
  imports: [
    applyRouting,
    HeaderModule,
    TranslateModule
  ],
  declarations: [
    ApplyComponent
  ]
})
export class ApplyModule {

}