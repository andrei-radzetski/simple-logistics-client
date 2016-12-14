import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { FilterModule } from '../shared/filter/filter.module';
import { SearchComponent } from './search.component';
import { searchRouting } from './search.routing';
import { TranslateModule } from '../shared/translate/translate.module';

@NgModule({
  imports: [
    searchRouting,
    HeaderModule,
    FilterModule,
    TranslateModule
  ],
  declarations: [
    SearchComponent
  ]
})
export class SearchModule {

}