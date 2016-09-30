import { Nav } from './nav';

export const LINKS: Nav[] = [
    new Nav(1, 'home', 'nav.home', true, /^\/$|\/home/),
    new Nav(2, 'search', 'nav.search', true, /^\/search/),
    new Nav(3, 'about', 'nav.about', true, /^\/about/),
    new Nav(4, 'login', 'nav.signin', false, /^\/login/),
    new Nav(5, 'join', 'nav.signup', false, /^\/join/)
];