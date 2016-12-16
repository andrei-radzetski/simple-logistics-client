import { NgModule } from '@angular/core';
import { DictionaryService } from './dictionary.service';
import { RestModule } from '../rest/rest.module';

@NgModule({
  imports: [
    RestModule
  ],
  providers: [
    DictionaryService
  ]
})
export class DictionaryModule { }