import { Component }         from '@angular/core';
import { Message }           from './message';
import { OnInit }            from '@angular/core';
import { MessageService }    from './message.service';

declare function WS4Redis({}): any;

@Component({
  moduleId: module.id,
  selector: 'chat-room',
  templateUrl: 'chatroom.component.html',
  styleUrls: ['chatroom.component.css']
})

export class ChatroomComponent implements OnInit {
  title = "Chatroom";
  messages: Message[];

  constructor(private messageService: MessageService) {}

  getMessage(): void {
    this.messageService.getMessage().then(messages => this.messages = messages);
  }

  ngOnInit(): void {
    var wsdict = {
    uri: '{{ WEBSOCKET_URI }}foobar?subscribe-broadcast&publish-broadcast&echo',
    receive_message: this.updateChat(),
    heartbeat_msg:'--heartbeat--'
    };
    WS4Redis(wsdict);
  }

  updateChat(): void {
    this.getMessage();
  };

  send(body: string): void {
    body = body.trim();
    if(!body) {return;}
    this.messageService.add(body).then(msg => this.updateChat());
  }
}
