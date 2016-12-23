import { Component } from '@angular/core';
import { RestResponseError } from '../shared/rest/rest.responseError';
import { RestResponseObject } from '../shared/rest/rest.responseObject';
import { UserService } from '../shared/user/user.service';
import { User } from '../shared/user/user';

@Component({
  moduleId: 'app/join/',
  selector: 'sl-join',
  templateUrl: './join.component.html'
})
export class JoinComponent {

  private user: User;
  private repeatPassword: String;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  create() {
    this.userService.createProfile(this.user)
      .subscribe(
        (res: RestResponseObject<User>) => console.log(res.object),
        (err: RestResponseError) => console.log(err));
  }

}