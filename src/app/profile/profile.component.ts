import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RestResponseError } from '../shared/rest/rest.responseError';
import { RestResponseObject } from '../shared/rest/rest.responseObject';
import { AuthService } from '../shared/auth/auth.service';
import { Auth } from '../shared/auth/auth';
import { BusyComponent } from '../shared/components/busy/busy.component';
import { RestCredential } from '../shared/rest/rest.credential';

@Component({
  moduleId: 'app/profile/',
  selector: 'sl-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  
  @ViewChild(BusyComponent)
  private busyIndicator: BusyComponent;

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.busyIndicator.open();
    this.authService.logout().subscribe(
      (res: RestResponseObject<Auth>) => this.proccessSuccess(res),
      (err: RestResponseError) => this.proccessError(err));
  }

  private proccessSuccess(res: RestResponseObject<Auth>) {
    this.router.navigate(['/login']);
    this.busyIndicator.close();
  }

  private proccessError(err: RestResponseError) {
    // TODO: proccess error
    console.log(err.message);
     this.busyIndicator.close();
  }

  private isAdmin(): boolean {
    return RestCredential.isAdmin();
  }

  gotoApply() {
    this.router.navigate(['/apply']);
  }

}
