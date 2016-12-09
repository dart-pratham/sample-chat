import { Component,Input } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'message-list',
  template: `
  <div *ngIf = "messages">
  <message-component *ngFor= "let message of messages" [msg]="message"></message-component>
  </div>
  `
})
export class MessageListComponent {
  @Input()
  messages: Message[];
  msg: Message;
}
