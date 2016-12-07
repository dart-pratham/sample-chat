import { Component,Input } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'message-component',
  template:`<div>
  <ul>
  <li>{{message.text}}</li>
  <li>{{message.time}}</li>
  <li>{{message.status}}</li>
  </ul>
  </div>`
        })
export class MessageComponent {
        @Input()
        message: Message;
        //this.message = new Message{};
}

