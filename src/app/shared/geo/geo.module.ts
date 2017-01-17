import { NgModule } from '@angular/core';
import { GeoService } from './geo.service';
import { RestModule } from '../rest/rest.module';

@NgModule({
  imports: [
    RestModule
  ],
  providers: [
    GeoService
  ]
})
export class GeoModule { }