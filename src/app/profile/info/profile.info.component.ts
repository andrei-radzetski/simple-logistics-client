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

  private userService: UserService;
  private user: User;

  constructor(userService: UserService) {
    this.userService = userService;
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

  getFullName(): string {
    return this.user ? this.user.getFullName() : '';
  }

  getEmail(): string {
    return this.user ? this.user.email : '';
  }

  getPhone(): string {
    return this.user ? this.user.phone : '';
  }

  getCountry(): string {
    return this.user ? this.user.country : '';
  }

  getCity(): string {
    return this.user ? this.user.city : '';
  }

  getLanguage() {
    return this.user ? this.user.language : '';
  }

  getAdditionalInfo() {
    return this.user ? this.user.additionalInfo : '';
  }

}