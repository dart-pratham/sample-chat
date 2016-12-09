import { Component } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
  selector: 'post-form',
  template: `
  <div>
  <label>Your msg:</label>
  <input #messageBody placeholder="Your message">
  <input type = "datetime-local" #timeOfFire >
  <button (click)="send(messageBody.value,timeOfFire.value); messageBody.value='';">Send</button>
  </div>
  `
})

export class PostComponent{
  messages: Message[];

  constructor(private messageService:MessageService){}

  send(body: string,time: string): void {
    body = body.trim();
    if(!body) {return;}
    this.messageService.add(body,time).then(msg => this.getMessage());
  }

  getMessage(): void {
    this.messageService.getMessage().then(messages => this.messages = messages);
  }
}
