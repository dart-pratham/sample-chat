import { Injectable } from '@angular/core';
import { Message } from './message';
import { SyncService } from './sync.service';
@Injectable()

export class MessageService {
  private ChatUrl = 'http://127.0.0.1:8000/chat/';
  constructor(private sync:SyncService) {}

  getMessage(): Promise<Message[]> {
    return this.sync.getRequest(this.ChatUrl).then(function(res){
      console.log(res.json());
      return (res.json() as Message[]);
    })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred',error);
    return Promise.reject(error.message || error);
  }

  private PostUrl = 'http://127.0.0.1:8000/post/';

  add(name: string): Promise<Message[]> {
   return this.sync.postRequest(this.PostUrl, {text: name})
    .then(res => res.json())
    .catch(this.handleError);
  }

  private filterUrl = 'http://192.168.2.184:8000';
  getUserMessage(userId: number): Promise<Message[]> {
    return this.sync.getRequest(this.filterUrl + "/user/" + userId).then(function(res){
      return (res.json() as Message[]);
    })
    .catch(this.handleError);
  }
}
