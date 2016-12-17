import { Nav } from './nav';
import { NavElementState } from './nav.elemetnState';
import { RestCredential } from '../rest/rest.credential';


let visibleAuthorized = {
  visible: (): boolean => {
    return RestCredential.isAuthorized();
  }
}

let visibleUnauthorized = {
  visible: (): boolean => {
    return !RestCredential.isAuthorized();
  }
}

let visibleAny = {
  visible: (): boolean => {
    return true;
  }
}

export const LINKS: Nav[] = [
  new Nav(1, 'home', 'nav.home', true, /^\/$|\/home/, visibleAny),
  new Nav(2, 'requests', 'nav.requests', true, /^\/requests/, visibleAny),
  new Nav(2, 'users', 'nav.users', true, /^\/users/, visibleAny),
  new Nav(3, 'about', 'nav.about', true, /^\/about/, visibleAny),
  new Nav(4, 'login', 'nav.signin', false, /^\/login/, visibleUnauthorized),
  new Nav(5, 'join', 'nav.signup', false, /^\/join/, visibleUnauthorized),
  new Nav(6, 'profile', 'nav.profile', false, /^\/profile/, visibleAuthorized)
];