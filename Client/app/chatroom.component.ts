import { Component, Input }         from '@angular/core';
import { Message }           from './message';
import { OnInit, OnChanges, OnDestroy } from '@angular/core';
import { MessageService }    from './message.service';
import { User }              from './user';
import { IP } from './ip.address';

class ChatroomComponent implements OnInit, OnChanges, OnDestroy{
  title = "Chatroom";
  messages: Message[];

  constructor(public messageService: MessageService) {}
  private ws : WebSocket;

  getMessage(): void {
    //this.messageService.getMessage().then(messages => this.messages = messages);
  }

  ngOnChanges(): void {
    this.getMessage();
  }

  ngOnInit(): void {

    this.getMessage();
    console.log(this);
    this.ws = new WebSocket("ws://"+ IP + "/ws/chatchannel?subscribe-broadcast");
    this.ws.onmessage = (event) => {
      this.getMessage();

    }
  }
  ngOnDestroy(): void {
    this.ws.onclose = (event:CloseEvent) => {
      this.ws = null;
      console.log("Closed");
    };
  }

  updateChat(): void {
    this.getMessage();
  };
}
@Component({
  moduleId: module.id,
  selector: 'all-message-list',
  template: `
  <message-list [messages]="messages"></message-list>
  `
})

export class AllMessageListComponent extends ChatroomComponent {

  constructor( messageService: MessageService) {
    super(messageService);
  }
  getMessage(): void {
    this.messageService.getMessage().then(messages => this.messages = messages);
  }
}

@Component({
  moduleId: module.id,
  selector: 'user-message-list',
  template: `
  <message-list [messages]="messages"></message-list>
  `
})

export class UserMessageListComponent extends ChatroomComponent {

  @Input()
  user: User;

  constructor( messageService: MessageService) {
    super(messageService);
  }
  getMessage(): void {
    console.log(this);
    this.messageService.getUserMessage(this.user.id).then(messages => this.messages = messages);
  }
}
