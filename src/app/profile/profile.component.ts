import { Component } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { Auth } from '../shared/auth/auth';
import { RestResponse } from '../shared/rest/rest.response';
import { Router } from '@angular/router';

@Component({
  moduleId: 'app/profile/',
  selector: 'sl-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout().subscribe(
      (res: RestResponse<Auth>) => this.proccessSussess(res),
      (err: RestResponse<Auth>) => this.proccessError(err));
  }

  private proccessSussess(res: RestResponse<Auth>) {
    this.router.navigate(['/login']);
  }

  private proccessError(err: RestResponse<Auth>) {
    // TODO: proccess error
    console.log(err.message);
  }

}