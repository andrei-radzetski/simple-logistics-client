import { Component, OnInit, ViewChild } from '@angular/core';
import { Message } from '../../shared/message/message';
import { RestResponseError } from '../../shared/rest/rest.responseError';
import { RestResponseArray } from '../../shared/rest/rest.responseArray';
import { Router, ActivatedRoute } from '@angular/router';
import { BusyComponent } from '../../shared/components/busy/busy.component';
import { MessageService } from '../../shared/message/message.service';

@Component({
  moduleId: 'app/profile/messages/',
  selector: 'sl-profile-messages',
  templateUrl: './profile.messages.component.html'
})
export class ProfileMessagesComponent implements OnInit {

  private items: Message[];
  private inbox: boolean = true;

  @ViewChild(BusyComponent)
  private busyIndicator: BusyComponent;

  constructor(private messageService: MessageService, private router: Router) {
    this.items = [];
  }

  ngOnInit() {
    this.busyIndicator.open();
    let obs = this.inbox ? this.messageService.inbox() : this.messageService.outbox()
    obs.subscribe(
      (res: RestResponseArray<Message>) => {
        this.items = res.array;
        this.busyIndicator.close();
      },
      (err: RestResponseError) => this.onError(err));
  }

  onError(err: RestResponseError) {
    console.log(err.message);
    this.busyIndicator.close();
  }

  inOutBox() {
    this.inbox = !this.inbox;
    this.ngOnInit()
  }

  read(message: Message) {
    this.router.navigate(['profile/messages/read', this.inbox ? message.sender : message.recipient, message.id]);
  }

}