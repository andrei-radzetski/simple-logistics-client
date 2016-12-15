import { NgModule } from '@angular/core';
import { aboutRouting } from './about.routing';
import { AboutComponent } from './about.component'
import { HeaderModule } from '../shared/header/header.module';
import { TranslateModule } from '../shared/translate/translate.module';

@NgModule({
  imports: [
    aboutRouting,
    HeaderModule,
    TranslateModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }