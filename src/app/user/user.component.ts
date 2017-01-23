import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/user/user.service';
import { User } from '../shared/user/user';

@Component({
  moduleId: 'app/user/',
  selector: 'sl-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  sendMessage() {
    this.router.navigate(['profile/messages/create', this.activatedRoute.snapshot.params['id']]);
  }

}