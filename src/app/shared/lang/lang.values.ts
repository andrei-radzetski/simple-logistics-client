import { Lang } from './lang';

export const LANGS_KEYS_EXP: RegExp = /ru|en/;
export const LANGS_DEFAULT: string = 'ru';

export const LANGS: Lang[] = [
  new Lang('ru', 'dict.language.ru'),
  new Lang('en', 'dict.language.en')
];
