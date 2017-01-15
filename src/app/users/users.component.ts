import { Component, OnInit } from '@angular/core';
import { RestResponseError } from '../shared/rest/rest.responseError';
import { RestResponseArray } from '../shared/rest/rest.responseArray';
import { Router } from '@angular/router';
import { UserService } from '../shared/user/user.service';
import { User } from '../shared/user/user';

@Component({
  moduleId: 'app/users/',
  selector: 'sl-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  private users: Array<User>;

  constructor(private userService: UserService, private router: Router) {
    this.users = new Array<User>();
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.filter()
      .subscribe(
      (res: RestResponseArray<User>) => this.users = res.array,
      (err: RestResponseError) => console.log(err.message));
  }

  search() {
    
  }

}