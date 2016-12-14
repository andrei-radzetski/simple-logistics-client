import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user/user.service';
import { User } from '../../shared/user/user';
import { RestResponse } from '../../shared/rest/rest.response';

@Component({
  moduleId: 'app/profile/info/',
  selector: 'sl-profile-info',
  templateUrl: './profile.info.component.html'
})
export class ProfileInfoComponent implements OnInit {

  // TODO: translations

  private userService: UserService;
  private user: User;
  private error: boolean;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  getFullName(): string {
    return this.user ? this.user.getFullName() : '';
  }

  getEmail(): string {
    return this.user ? this.user.email : '';
  }

  getPhone(): string {
    return this.user ? this.user.phone : '';
  }

  private getProfileData() {
    this.userService.getProfileData().subscribe(
      (res: RestResponse<User>) => this.proccessSussess(res),
      (err: RestResponse<User>) => this.proccessError(err));
  }

  private proccessSussess(res: RestResponse<User>) {
    this.error = false;
    this.user = res.data;
  }

  private proccessError(err: RestResponse<User>) {
    this.error = true;
    this.user = undefined;
  }

  ngOnInit() {
    this.getProfileData();
  }

}