import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestResponseError } from '../shared/rest/rest.responseError';
import { RestResponseObject } from '../shared/rest/rest.responseObject';
import { AuthService } from '../shared/auth/auth.service';
import { Auth } from '../shared/auth/auth';

@Component({
  moduleId: 'app/profile/',
  selector: 'sl-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout().subscribe(
      (res: RestResponseObject<Auth>) => this.proccessSuccess(res),
      (err: RestResponseError) => this.proccessError(err));
  }

  private proccessSuccess(res: RestResponseObject<Auth>) {
    this.router.navigate(['/login']);
  }

  private proccessError(err: RestResponseError) {
    // TODO: proccess error
    console.log(err.message);
  }

  gotoApply() {
    this.router.navigate(['/apply']);
  }

}
