import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { HeaderModule } from '../shared/header';
import { SearchComponent } from './search.component';
import { searchRouting } from './search.routing';

@NgModule({
    imports: [
        searchRouting,
        HeaderModule,
        TranslateModule
    ],
    declarations: [
        SearchComponent
    ]
})
export class SearchModule {
    
}