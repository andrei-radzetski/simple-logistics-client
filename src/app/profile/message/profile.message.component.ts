import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from '../../shared/message/message';
import { RestResponseError } from '../../shared/rest/rest.responseError';
import { RestResponseObject } from '../../shared/rest/rest.responseObject';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../shared/user/user.service';
import { User } from '../../shared/user/user';
import { BusyComponent } from '../../shared/components/busy/busy.component';
import { MessageService } from '../../shared/message/message.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

@Component({
  moduleId: 'app/profile/message/',
  selector: 'sl-profile-message',
  templateUrl: './profile.message.component.html'
})
export class ProfileMessageComponent implements OnInit {

  private message: Message;
  private newMessage: Message;
  private name: String;
  private isNew: boolean = true;
  private invalid: boolean = false;

  @ViewChild(BusyComponent)
  private busyIndicator: BusyComponent;

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private router: Router) {
    this.message = new Message();
    this.newMessage = new Message();
  }

  ngOnInit() {

    this.busyIndicator.open();
    let userId = this.activatedRoute.snapshot.params['userId'];
    let id = this.activatedRoute.snapshot.params['id'];

    if (userId && id) {
      this.isNew = false;
      this.messageService.read(id)
        .flatMap((res: RestResponseObject<Message>) => {
          return this.userService.get(userId);
        }).flatMap((res: RestResponseObject<User>) => {
          this.onUser(res.object);
          return this.messageService.get(id);
        }).subscribe(
        (res: RestResponseObject<Message>) => {
          this.onMessage(res.object);
          this.busyIndicator.close();
        },
        (err: RestResponseError) => this.onError(err));
    }

    if (userId && id == null) {
      this.isNew = true;
      this.userService.get(userId)
        .subscribe((res: RestResponseObject<User>) => {
          this.onUser(res.object);
          this.busyIndicator.close();
        },
        (err: RestResponseError) => this.onError(err));
    }

  }

  onError(err: RestResponseError) {
    console.log(err.message);
    this.busyIndicator.close();
  }

  onUser(user: User) {
    this.name = user.getFullName();
    this.newMessage.recipient = user.id;
  }

  onMessage(msg: Message) {
    this.message = msg;
  }

  validate() {
    this.invalid = this.newMessage == null
      || this.newMessage.text == null
      || this.newMessage.text.trim().length === 0
      || this.newMessage.recipient == null;
    return !this.invalid;
  }

  send() {
    if (this.validate()) {
      this.busyIndicator.open();
      this.messageService.create(this.newMessage).subscribe(
        (res: RestResponseObject<Message>) => {
          this.router.navigate(['profile/messages']);
          this.busyIndicator.close();
        },
        (err: RestResponseError) => this.onError(err));
    }
  }

}