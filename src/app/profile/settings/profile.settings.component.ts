import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user/user.service';
import { User } from '../../shared/user/user';
import { RestResponse } from '../../shared/rest/rest.response';

@Component({
  moduleId: 'app/profile/settings/',
  selector: 'sl-profile-settings',
  templateUrl: './profile.settings.component.html'
})
export class ProfileSettingsComponent implements OnInit {

  private userService: UserService;
  private user: User;

  constructor(userService: UserService) {
    this.userService = userService;
    this.user = new User();
  }

  private getProfileData() {
    this.userService.getProfileData().subscribe(
      (res: RestResponse<User>) => this.proccessSussess(res),
      (err: RestResponse<User>) => this.proccessError(err));
  }

  private proccessSussess(res: RestResponse<User>) {
    this.user = res.data;
  }

  private proccessError(err: RestResponse<User>) {
    this.user = undefined;
  }

  ngOnInit() {
    this.getProfileData();
  }

  save() {
    console.log(this.user);
  }

}