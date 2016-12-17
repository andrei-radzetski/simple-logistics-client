import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';
import { TranslateModule } from '../shared/translate/translate.module';

@NgModule({
  imports: [
    homeRouting,
    HeaderModule,
    TranslateModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
