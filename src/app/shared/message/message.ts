import { RestObject } from '../rest/rest.object';
import { RestRequest } from '../rest/rest.request';

export class Message extends RestObject implements RestRequest {

  id: string;
  sender: string;
  senderName: string;
  recipient: string;
  recipientName: string;
  text: string;
  date: Date;
  read: boolean;

  fill(object: any): void {
    this.id = object.id;
    this.sender = object.sender;
    this.senderName = object.senderName;
    this.recipient = object.recipient;
    this.recipientName = object.recipientName;
    this.text = object.text;
    this.date = object.date;
    this.read = object.read;
  }

  toRequest(): string {
    return JSON.stringify(this);
  }

}