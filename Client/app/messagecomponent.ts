import { Component,Input,OnInit } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'message-component',
  template:`<div *ngIf = [msg]>
  <ul>
  <li>{{msg.text}}</li>
  </ul>
  </div>`
})
export class MessageComponent implements OnInit{
  @Input()
  msg: Message;
  ngOnInit(): void {
    var hour = new Date().getHours().toString();
    var minute = new Date().getMinutes().toString();
    var second = new Date().getSeconds().toString();
    this.msg.time = hour +":" + minute +":" + second ;
    console.log(this.msg.time);
  }
}

