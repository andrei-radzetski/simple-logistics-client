import { Injectable } from '@angular/core';
import { RestHttp } from '../rest/rest.http';
import { Observable } from 'rxjs/Observable';
import { RestService } from '../rest/rest.service';
import { RestResponseObject } from '../rest/rest.responseObject';
import { RestResponseArray } from '../rest/rest.responseArray';
import { Message } from './message';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class MessageService extends RestService<Message> {

  constructor(http: RestHttp) {
    super(http, { create: (): Message => new Message() });
  }

  inbox(): Observable<RestResponseArray<Message>> {
    return this.getArray('/messages/box/in');
  }

  outbox(): Observable<RestResponseArray<Message>> {
    return this.getArray('/messages/box/out');
  }

  read(id: string): Observable<RestResponseObject<Message>> {
    return this.getOne('/messages/box/read/' + id);
  }

  get(id: string): Observable<RestResponseObject<Message>> {
    return this.getOne('/messages/' + id);
  }

  create(model: Message): Observable<RestResponseObject<Message>> {
    return this.postOne('/messages', model);
  }

}
