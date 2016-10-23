import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { HeaderModule } from '../shared/header/header.module';
import { FilterModule } from '../shared/filter/filter.module';
import { SearchComponent } from './search.component';
import { searchRouting } from './search.routing';

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