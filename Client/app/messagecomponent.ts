import { Component,Input } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'message-component',
  template:`<div *ngIf = [msg]>
  <ul>
  <li>{{msg.text}}</li>
  </ul>
  </div>`
        })
export class MessageComponent {
        @Input()
        msg: Message;
        //this.message = new Message{};
}
