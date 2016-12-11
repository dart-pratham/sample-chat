import { Injectable } from '@angular/core';
import { Message } from './message';
import { SyncService } from './sync.service';
import { IP } from './ip.address';

@Injectable()

export class MessageService {
  constructor(private sync:SyncService) {}
  private ChatUrl = 'http://'+IP+'/chat/';

  getMessage(): Promise<Message[]> {
    return this.sync.getRequest(this.ChatUrl).then(function(res){
      console.log(res);
      console.log(res.json());
      return (res.json() as Message[]);
    })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred',error);
    return Promise.reject(error.message || error);
  }

  private PostUrl = 'http://'+IP+'/post/';

  add(task: string,time_of_fire: string): Promise<Message[]> {
    var time = new Date(time_of_fire);
   return this.sync.postRequest(this.PostUrl, {text: task,time_to_fire: time})
    .then(res => res.json())
    .catch(this.handleError);
  }

  private filterUrl = 'http://'+IP+'/filter/';
  getUserMessage(userId: number): Promise<Message[]> {
    return this.sync.getRequest(this.filterUrl + "user/" + userId + '/').then(function(res){
      return (res.json() as Message[]);
    })
    .catch(this.handleError);
  }
}
