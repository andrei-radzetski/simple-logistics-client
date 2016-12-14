import { Nav } from './nav';
import { NavElementState } from './nav.elemetnState';
import { AuthService } from '../auth/auth.service';


let visibleAuthorized = {
    visible: (): boolean => {
        return AuthService.isAuthorized();
    }
}

let visibleUnauthorized = {
    visible: (): boolean => {
        return !AuthService.isAuthorized();
    }
}

let visibleAny = {
    visible: (): boolean => {
        return true;
    }
}

export const LINKS: Nav[] = [
    new Nav(1, 'home', 'nav.home', true, /^\/$|\/home/, visibleAny),
    new Nav(2, 'search', 'nav.search', true, /^\/search/, visibleAny),
    new Nav(3, 'about', 'nav.about', true, /^\/about/, visibleAny),
    new Nav(4, 'login', 'nav.signin', false, /^\/login/, visibleUnauthorized),
    new Nav(5, 'join', 'nav.signup', false, /^\/join/, visibleUnauthorized),
    new Nav(6, 'profile', 'nav.profile', false, /^\/profile/, visibleAuthorized)
];