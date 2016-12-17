import { Component, OnInit } from '@angular/core';
import { RestResponseError } from '../../shared/rest/rest.responseError';
import { RestResponseObject } from '../../shared/rest/rest.responseObject';
import { RestResponseArray } from '../../shared/rest/rest.responseArray';
import { UserService } from '../../shared/user/user.service';
import { DictionaryService } from '../../shared/dictionary/dictionary.service';
import { User } from '../../shared/user/user';
import { Dictionary } from '../../shared/dictionary/dictionary';

@Component({
  moduleId: 'app/profile/settings/',
  selector: 'sl-profile-settings',
  templateUrl: './profile.settings.component.html'
})
export class ProfileSettingsComponent implements OnInit {

  private userService: UserService;
  private dictionaryService: DictionaryService;
  private user: User;
  private countries: Dictionary[];
  private languages: Dictionary[];

  constructor(userService: UserService, dictionaryService: DictionaryService) {
    this.userService = userService;
    this.dictionaryService = dictionaryService;
    this.user = new User();
  }

  private getProfileData() {
    this.userService.getProfileData().subscribe(
      (res: RestResponseObject<User>) => this.user = res.object,
      (err: RestResponseError) => this.user = undefined);
  }

  private getCountries() {
    this.dictionaryService.getCountries().subscribe(
      (res: RestResponseArray<Dictionary>) => this.countries = res.array,
      (err: RestResponseError) => this.countries = undefined);
  }

  private getLanguages() {
    this.dictionaryService.getLanguages().subscribe(
      (res: RestResponseArray<Dictionary>) => this.languages = res.array,
      (err: RestResponseError) => this.languages = undefined);
  }

  ngOnInit() {
    this.getProfileData();
    this.getCountries();
    this.getLanguages();
  }

  save() {
    this.userService.updateProfileDate(this.user).subscribe(
      (res: RestResponseObject<User>) => this.user = res.object,
      (err: RestResponseError) => console.error(err.message));
  }

}