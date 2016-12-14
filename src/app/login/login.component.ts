import { Component } from '@angular/core';
import { AuthRequest } from '../shared/auth/auth.request';
import { AuthService } from '../shared/auth/auth.service';
import { Auth } from '../shared/auth/auth';
import { RestResponse } from '../shared/rest/rest.response';

@Component({
  moduleId: 'app/login/',
  selector: 'sl-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  private authService: AuthService
  private model: AuthRequest
  private submitted: boolean;

  constructor(authService: AuthService) {
    this.authService = authService;
    this.model = new AuthRequest();
    this.submitted = false;
  }

  // TODO: remove credential

  private onSubmit() {
    this.authService.login(this.model).subscribe(
      (res: RestResponse<Auth>) => this.proccessSussess(res),
      (err: RestResponse<Auth>) => this.proccessError(err));
  }

  private proccessSussess(res: RestResponse<Auth>) {
    AuthService.setCredential(res.data.accessToken, res.data.expires);
  }

  private proccessError(err: RestResponse<Auth>) {
    AuthService.destroyCredential();
  }
}