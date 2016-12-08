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

  private ws : WebSocket;

  getMessage(): void {
    this.messageService.getMessage().then(messages => this.messages = messages);
  }

  ngOnInit(): void {

    this.ws = new WebSocket("ws://192.168.2.115:8000/ws/chatchannel?subscribe-broadcast");
    this.ws.onmessage = (event) => {
      console.log("received " + event.data);
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
    console.log(this);
    this.getMessage();
  };

  send(body: string): void {
    body = body.trim();
    if(!body) {return;}
    this.messageService.add(body).then(msg => this.updateChat());
  }
}
