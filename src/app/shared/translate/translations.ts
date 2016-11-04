import { OpaqueToken } from '@angular/core';

import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en.values';
import { LANG_RU_NAME, LANG_RU_TRANS } from './lang-ru.values';

export const TRANSLATIONS = new OpaqueToken('translations');

const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_RU_NAME]: LANG_RU_TRANS
};

export const DEFAULT_LANG = LANG_EN_NAME;

export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary }
];