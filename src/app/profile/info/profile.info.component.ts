import { Component, OnInit } from '@angular/core';
import { RestResponseError } from '../../shared/rest/rest.responseError';
import { RestResponseObject } from '../../shared/rest/rest.responseObject';
import { UserService } from '../../shared/user/user.service';
import { User } from '../../shared/user/user';

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
      (res: RestResponseObject<User>) => this.user = res.object,
      (err: RestResponseError) => this.user = undefined);
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