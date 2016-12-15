import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user/user.service';
import { DictionaryService } from '../../shared/dictionary/dictionary.service';
import { User } from '../../shared/user/user';
import { Dictionary } from '../../shared/dictionary/dictionary';
import { RestResponse } from '../../shared/rest/rest.response';
import { RestArrayResponse } from '../../shared/rest/rest.arrayResponse';

@Component({
  moduleId: 'app/profile/settings/',
  selector: 'sl-profile-settings',
  templateUrl: './profile.settings.component.html'
})
export class ProfileSettingsComponent implements OnInit {

  private userService: UserService;
  private dictionaryService: DictionaryService;
  private user: User;

  constructor(userService: UserService, dictionaryService: DictionaryService) {
    this.userService = userService;
    this.dictionaryService = dictionaryService;
    this.user = new User();
  }

  private getProfileData() {
    this.userService.getProfileData().subscribe(
      (res: RestResponse<User>) => this.user = res.data,
      (err: RestResponse<User>) => this.user = undefined);
  }

  private getLanguages() {
    this.dictionaryService.getLanguages().subscribe(
      (res: RestArrayResponse<Array<Dictionary>>) => this.proccessSussessLanguages(res),
      (err: RestArrayResponse<Array<Dictionary>>) => this.proccessErrorLanguages(err));
  }

  private proccessSussessLanguages(res: RestArrayResponse<Array<Dictionary>>) {
    console.log(res);
  }

  private proccessErrorLanguages(err: RestArrayResponse<Array<Dictionary>>) {
    console.log(err);
  }

  ngOnInit() {
    this.getProfileData();
    this.getLanguages();
  }

  save() {
    console.log(this.user);
  }

}