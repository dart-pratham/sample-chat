import { Injectable } from '@angular/core';
import { Headers, Http  } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Message } from './message';
import { SyncService } from './sync.service';
@Injectable()

export class MessageService {
  private ChatUrl = 'http://192.168.2.184:8000/chat/';
  constructor (private http:Http,
               private sync:SyncService) {}

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

  private PostUrl = 'http://192.168.2.184:8000/post/';

  add(task: string,time_of_fire: string): Promise<Message[]> {
    var time = new Date(time_of_fire);
   return this.sync.postRequest(this.PostUrl, {text: task,time_to_fire: time})
    .then(res => res.json())
    .catch(this.handleError);
  }
}
