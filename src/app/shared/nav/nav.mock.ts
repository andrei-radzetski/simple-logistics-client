import { Nav } from './nav';

export const LINKS: Nav[] = [
    new Nav(1, 'home', 'nav.home', true, ['/', '/home']),
    new Nav(2, 'about', 'nav.about', true, ['/about']),
    new Nav(3, 'login', 'nav.signin', false, ['/login']),
    new Nav(4, 'join', 'nav.signup', false, ['/join'])
];