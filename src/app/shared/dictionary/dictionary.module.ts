import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DictionaryService } from './dictionary.service';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    DictionaryService
  ]
})
export class DictionaryModule { }