import { Component, Inject } from '@angular/core';
import { TranslateService } from 'ng2-translate/ng2-translate';


@Component({
    selector: 'sl-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    
    constructor(@Inject(TranslateService) translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('ru');
    }
    
}
