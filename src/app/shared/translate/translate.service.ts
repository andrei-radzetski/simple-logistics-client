import { Injectable, Inject } from '@angular/core';

import { TRANSLATIONS, DEFAULT_LANG } from './translations';


@Injectable()
export class TranslateService {

    private currentLang: string;

    constructor( @Inject(TRANSLATIONS) private translations: any) {
        if(!this.currentLang) {
            this.currentLang = DEFAULT_LANG;
        }
    }


    /**
     * Set language.
     */
    public use(lang: string): void {
        this.currentLang = lang;
    }


    private translate(key: string): string {
        let translation = key;

        if (this.translations[this.currentLang] && this.translations[this.currentLang][key]) {
            return this.translations[this.currentLang][key];
        }

        return translation;
    }

    /**
     * Translate by key.
     */
    public instant(key: string) {
        return this.translate(key);
    }
}