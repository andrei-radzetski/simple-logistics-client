import { NgModule } from '@angular/core';
import { GeoDialogComponent } from './geo.dialog.component';
import { GeoDialogContent } from './geo.dialog.content';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '../../translate/translate.module';

@NgModule({
  imports: [
    NgbModule,
    AgmCoreModule,
    FormsModule,
    CommonModule,
    TranslateModule
  ],
  declarations: [
    GeoDialogComponent,
    GeoDialogContent
  ],
  entryComponents: [
    GeoDialogContent
  ],
  exports: [
    GeoDialogComponent
  ]
})
export class GeoDialogModule { }