import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RestCredential } from '../rest/rest.credential';

@Injectable()
export class RouteCanActiveUnauthorized implements CanActivate, CanActivateChild {
  
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(RestCredential.isAuthorized()) {
      this.router.navigate(['/profile']);
      return false;
    } else {
      return true;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(RestCredential.isAuthorized()) {
      this.router.navigate(['/profile']);
      return false;
    } else {
      return true;
    }
  }

}