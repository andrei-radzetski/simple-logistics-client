import { Component, OnInit, ViewChild } from '@angular/core';
import { RestResponseError } from '../../shared/rest/rest.responseError';
import { RestResponseObject } from '../../shared/rest/rest.responseObject';
import { RestResponseArray } from '../../shared/rest/rest.responseArray';
import { UserService } from '../../shared/user/user.service';
import { DictionaryService } from '../../shared/dictionary/dictionary.service';
import { User } from '../../shared/user/user';
import { Dictionary } from '../../shared/dictionary/dictionary';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/map'
import { BusyComponent } from '../../shared/components/busy/busy.component';

@Component({
  moduleId: 'app/profile/settings/',
  selector: 'sl-profile-settings',
  templateUrl: './profile.settings.component.html'
})
export class ProfileSettingsComponent implements OnInit {

  @ViewChild(BusyComponent)
  private busyIndicator: BusyComponent;
  private user: User;
  private country: Dictionary;
  private language: Dictionary;
  private countries: Dictionary[];
  private languages: Dictionary[];

  constructor(private userService: UserService, private dictionaryService: DictionaryService) {
    this.user = new User();
  }

  private getData() {
    this.busyIndicator.open();
    return this.dictionaryService.getCountries()
      .flatMap((res: RestResponseArray<Dictionary>) => { 
        this.onCountriesReceived(res.array);
        return this.dictionaryService.getLanguages()
      })
      .flatMap((res: RestResponseArray<Dictionary>) => { 
        this.onLanguagesReceived(res.array);
        return this.userService.getProfileData();
      })
      .subscribe(
        (res: RestResponseObject<User>) => this.onUserReceived(res.object),
        (err: RestResponseError) => this.onError(err),
        () => this.busyIndicator.close())
  }

  ngOnInit() {
    this.getData();
  }

  onUserReceived(user: User) {
    this.user = user;
    for(let c of this.countries) {
      if(c.key === user.country) {
        this.country = c;
      }
    }
    for(let l of this.languages) {
      if(l.key === user.language) {
        this.language = l;
      }
    }
  }

  onCountriesReceived(countries: Dictionary[]) {
    this.countries = countries;
  }

  onLanguagesReceived(languages: Dictionary[]) {
    this.languages = languages;
  }

  onCountryChanged(value: Dictionary) {
    this.country = value;
    this.user.country = this.country.key;
  }

  onLanguageChanged(value: Dictionary) {
    this.language = value;
    this.user.language = this.language.key;
  }

  save() {
    this.busyIndicator.open();
    this.userService.updateProfileDate(this.user).subscribe(
      (res: RestResponseObject<User>) => this.onUserReceived(res.object),
      (err: RestResponseError) => this.onError(err),
      () => this.busyIndicator.close());
  }

  onError(err: RestResponseError) {
    console.log(err.message);
    this.busyIndicator.close();
  }

}