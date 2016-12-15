import { Component } from '@angular/core';
import { AuthRequest } from '../shared/auth/auth.request';
import { AuthService } from '../shared/auth/auth.service';
import { Auth } from '../shared/auth/auth';
import { RestResponse } from '../shared/rest/rest.response';
import { Router } from '@angular/router';

@Component({
  moduleId: 'app/login/',
  selector: 'sl-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  private authService: AuthService
  private model: AuthRequest
  private submitted: boolean;
  private route: Router;

  constructor(authService: AuthService, route: Router) {
    this.authService = authService;
    this.model = new AuthRequest();
    this.submitted = false;
    this.route = route;
  }

  private onSubmit() {
    this.authService.login(this.model).subscribe(
      (res: RestResponse<Auth>) => this.proccessSussess(res),
      (err: RestResponse<Auth>) => this.proccessError(err));
  }

  private proccessSussess(res: RestResponse<Auth>) {
    this.route.navigate(['/profile']);
  }

  private proccessError(err: RestResponse<Auth>) {
    // TODO: proccess error
    console.log(err.message);
  }
}