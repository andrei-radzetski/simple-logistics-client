import { Component, OnInit, ViewChild } from '@angular/core';
import { RestResponseError } from '../shared/rest/rest.responseError';
import { RestResponseArray } from '../shared/rest/rest.responseArray';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { UserService } from '../shared/user/user.service';
import { User } from '../shared/user/user';
import { BusyComponent } from '../shared/components/busy/busy.component';
import { DictionaryService } from '../shared/dictionary/dictionary.service';
import { Dictionary } from '../shared/dictionary/dictionary';
import { URLSearchParams } from '@angular/http';

@Component({
  moduleId: 'app/users/',
  selector: 'sl-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  private users: Array<User>;
  private country: Dictionary;
  private countries: Dictionary[];
  private firstName: string;
  private secondName: string;
  private city: string;

  @ViewChild(BusyComponent)
  private busyIndicator: BusyComponent;

  constructor(private userService: UserService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private dictionaryService: DictionaryService) {
    this.users = new Array<User>();
  }

  ngOnInit() {
    this.busyIndicator.open();
    this.dictionaryService.getCountries()
    .flatMap((res: RestResponseArray<Dictionary>) => {
        this.countries = res.array;
        return this.activatedRoute.queryParams;
      }).flatMap(params => {
        this.firstName = params['firstName'] || undefined;
        this.secondName = params['secondName'] || undefined;
        this.city = params['city'] || undefined;
        return this.userService.filter(this.createQueryParams());
      }).subscribe(
      (res: RestResponseArray<User>) => {
        this.users = res.array
        this.busyIndicator.close();
      },
      (err: RestResponseError) => this.onError(err));
  }

  onError(err: RestResponseError) {
    console.log(err.message);
    this.busyIndicator.close();
  }

  onCountryChanged(value: Dictionary) {
    this.country = value;
  }

  search() {
    this.router.navigate(['/users'], this.createSearchParams());
    this.userService.filter(this.createQueryParams());
  }

  private createQueryParams(): URLSearchParams {
      let params = new URLSearchParams();
      if(this.firstName) params.set('firstName', this.firstName);
      if(this.secondName) params.set('secondName', this.secondName);
      if(this.country) params.set('country', this.country.key.toString());
      if(this.city) params.set('city', this.city);
      return params
  }
 
  private createSearchParams(): NavigationExtras {
    return {
      queryParams: {
        firstName: this.firstName,
        secondName: this.secondName,
        country: this.country ? this.country.key : undefined,
        city: this.city
      }
    }
  }

}