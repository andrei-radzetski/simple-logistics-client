import { Component, OnInit } from '@angular/core';

import { Lang } from '../lang/lang';
import { LangService } from '../lang/lang.service';


@Component({
    moduleId: 'app/shared/footer/',
    selector: 'sl-footer',
    templateUrl: './footer.component.html',
    providers: [
        LangService
    ]
})
export class FooterComponent implements OnInit {

    private langs: Lang[];
    private langService: LangService;

    constructor(langService: LangService) {
        this.langService = langService;
    }

    private setLang(lang: Lang) {
        this.langService.setSelectedLang(lang);
    }

    private isLangActive(lang: Lang): boolean {
        return this.langService.isSelectedLang(lang);
    }

    ngOnInit() {
        this.langs = this.langService.getLangsArray();
    }
}