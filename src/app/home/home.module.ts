import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';
import { TranslateModule } from '../shared/translate/translate.module';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    homeRouting,
    HeaderModule,
    TranslateModule,
    AgmCoreModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
