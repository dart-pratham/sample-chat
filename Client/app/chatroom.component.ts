import { Component }         from '@angular/core';
import { Message }           from './message';
import { OnInit }            from '@angular/core';
import { MessageService }    from './message.service';

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

    let ws : WebSocket;

    ws = new WebSocket("ws://192.168.2.115:8000/ws/chatchannel?subscribe-broadcast");
    ws.onmessage = (event) => {
      console.log("received " + event.data);
      this.getMessage();
    }

  }


  updateChat(): void {
    console.log(this);
    this.getMessage();
  };

  send(body: string): void {
    body = body.trim();
    if(!body) {return;}
    this.messageService.add(body).then(msg => this.updateChat());
  }
}
