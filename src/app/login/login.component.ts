import { Component } from '@angular/core';
import { RestResponseError } from '../shared/rest/rest.responseError';
import { RestResponseObject } from '../shared/rest/rest.responseObject';
import { AuthRequest } from '../shared/auth/auth.request';
import { AuthService } from '../shared/auth/auth.service';
import { Auth } from '../shared/auth/auth';
import { Router } from '@angular/router';

@Component({
  moduleId: 'app/login/',
  selector: 'sl-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  private model: AuthRequest;

  constructor(
    private authService: AuthService, 
    private route: Router) {

      this.model = new AuthRequest();
    }

  private onSubmit() {
    this.authService.login(this.model).subscribe(
      (res: RestResponseObject<Auth>) => this.proccessSuccess(res),
      (err: RestResponseError) => this.proccessError(err));
  }

  private proccessSuccess(res: RestResponseObject<Auth>) {
    this.route.navigate(['/profile']);
  }

  private proccessError(err: RestResponseError) {
    // TODO: proccess error
    console.log(err.message);
  }

}
