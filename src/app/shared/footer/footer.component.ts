import { Component, OnInit } from '@angular/core';
import { LangService, Lang } from '../lang';


@Component({
    selector: 'sl-footer',
    templateUrl: 'app/shared/footer/footer.component.html',
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