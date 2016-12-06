import { Component } from '@angular/core';
import { Message } from './message';
import { OnInit } from '@angular/core';
import {MessageService} from './message.service';

@Component({
  moduleId: module.id,
  selector: 'chat-room',
  templateUrl: 'chatroom.component.html',
  styleUrls: ['chatroom.component.css']
})

export class ChatroomComponent implements OnInit {
  title = "Chatroom"
  messages: Message[];

  constructor(private messageService: MessageService) {}

  getMessage(): void {
    let x = this;
    this.messageService.getMessage()
    .then(messages => x.messages = messages);
  }

  ngOnInit(): void {
    this.getMessage();
  }

  UpdateMsg(): void {
    this.getMessage();
  }
  send(body: string): void {
    body = body.trim();
    if(!body) return;
    this.messageService.add(body).then(msg => this.UpdateMsg());
    }
}
