import { Component, OnInit, ViewChild } from '@angular/core';
import { RestResponseError } from '../../shared/rest/rest.responseError';
import { RestResponseObject } from '../../shared/rest/rest.responseObject';
import { UserService } from '../../shared/user/user.service';
import { User } from '../../shared/user/user';
import { BusyComponent } from '../../shared/components/busy/busy.component';

@Component({
  moduleId: 'app/profile/info/',
  selector: 'sl-profile-info',
  templateUrl: './profile.info.component.html'
})
export class ProfileInfoComponent implements OnInit {

  @ViewChild(BusyComponent)
  private busyIndicator: BusyComponent;
  private user: User;

  constructor(private userService: UserService) {
    this.userService = userService;
    this.user = new User();
  }

  private getProfileData() {
    this.busyIndicator.open();
    this.userService.getProfileData().subscribe(
      (res: RestResponseObject<User>) => this.onUserReceived(res.object),
      (err: RestResponseError) => this.onError(err),
      () => this.busyIndicator.close());
  }

  onUserReceived(user: User) {
    this.user = user;
  }

  onError(err: RestResponseError) {
    this.busyIndicator.close();
    this.user = new User();
    console.log(err.message);
  }

  ngOnInit() {
    this.getProfileData();
  }

}