import { Component,Input,OnInit } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'message-component',
  template:`<div *ngIf = [msg]>
  <ul>
  <li>{{msg.text}}  {{msg.time_to_fire}}</li>
  </ul>
  </div>`
})
export class MessageComponent {
  @Input()
  msg: Message;
}
