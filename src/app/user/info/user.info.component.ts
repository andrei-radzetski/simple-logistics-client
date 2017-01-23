import { Component, OnInit, ViewChild } from '@angular/core';
import { RestResponseError } from '../../shared/rest/rest.responseError';
import { RestResponseObject } from '../../shared/rest/rest.responseObject';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../shared/user/user.service';
import { User } from '../../shared/user/user';
import { BusyComponent } from '../../shared/components/busy/busy.component';

@Component({
  moduleId: 'app/user/info/',
  selector: 'sl-user-info',
  templateUrl: './user.info.component.html'
})
export class UserInfoComponent implements OnInit {

  private user: User;

  @ViewChild(BusyComponent)
  private busyIndicator: BusyComponent;

  constructor(private userService: UserService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.user = new User();
  }

  ngOnInit() {
    this.busyIndicator.open();
    this.userService.get(this.activatedRoute.parent.snapshot.params['id']).subscribe(
      (res: RestResponseObject<User>) => {
        this.user = res.object
        this.busyIndicator.close();
      },
      (err: RestResponseError) => this.onError(err));
  }

  onError(err: RestResponseError) {
    console.log(err.message);
    this.busyIndicator.close();
  }

}