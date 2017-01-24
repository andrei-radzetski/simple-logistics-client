import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RestCredential } from '../rest/rest.credential';

@Injectable()
export class RouteCanActiveAdmin implements CanActivate, CanActivateChild {

  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(RestCredential.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['/profile/info']);
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(RestCredential.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['/profile/info']);
      return false;
    }
  }

}