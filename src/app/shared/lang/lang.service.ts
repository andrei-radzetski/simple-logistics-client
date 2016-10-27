import { Injectable, Inject } from '@angular/core';
import { TranslateService } from 'ng2-translate';

import { Lang } from './lang'
import { LANGS, LANGS_KEYS_EXP, LANGS_DEFAULT } from './lang.mock';


@Injectable()
export class LangService {

    private langs: Map<string, Lang> = new Map();
    private selected: Lang;

    private translateService: TranslateService;

    constructor( @Inject(TranslateService) translateService: TranslateService) {
        this.translateService = translateService;
        this.translateService.setDefaultLang(LANGS_DEFAULT);
        this.init();
    }

    /**
     * Get langs array.
     */
    public getLangsArray(): Lang[] {
        return LANGS;
    }

    /**
     * Set selected lang, if lang isn't found, 
     * set default lang (see lang.mock.ts -> LANGS_DEFAULT).
     */
    public setSelected(lang: string) {
        lang = this.isLangAvailable(lang) ? lang : LANGS_DEFAULT;
        this.translateService.use(lang);
        this.selected = this.langs.get(lang);
    }

    /**
     * See { LangService.setSelected }
     */
    public setSelectedLang(lang: Lang) {
        this.setSelected(lang ? lang.key : LANGS_DEFAULT);
    }

    /**
     * Check selected lang.
     */
    public isSelected(lang: string) {
        return lang && this.selected && lang == this.selected.key;
    }

    /**
     * See { LangService.isSelectedLang }
     */
    public isSelectedLang(lang: Lang) {
        return this.isSelected(lang ? lang.key : null);
    }

    /**
     * Lang available checking, 
     * true if available, false if not.
     */
    public isLangAvailable(lang: string): boolean {
        return lang && !!lang.match(LANGS_KEYS_EXP);
    }

    /**
     * Initialize langs map.
     */
    private init() {
        this.initLangsMap();
        this.initSelected();
    }

    /**
     * Initialize langs map from source.
     */
    private initLangsMap() {
        for (let lang of LANGS) {
            this.langs.set(lang.key, lang);
        }
    }

    /**
     * Initialize selected lang, read 
     * browser lang and set as selected.
     */
    private initSelected() {
        this.setSelected(this.translateService.getBrowserLang());
    }
}