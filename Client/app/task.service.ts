import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Task } from './task';
import { SyncService } from './sync.service';
import { IP } from './ip.address';

@Injectable()
export class TaskService {

  private TaskUrl = 'http://'+IP+'/get-notif/';
  constructor (private http:Http, private sync:SyncService ){}

  getTask(): Promise<Task[]> {
    return this.sync.getRequest(this.TaskUrl).then(function(res){
      return (res.json() as Task[]);
    })
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred',error);
    return Promise.reject(error.message || error);
  }

  private TaskPostUrl = 'http://'+IP+'/get-notif/';

  check(id: number): Promise<number>{
    return this.sync.postRequest(this.TaskPostUrl, {id:id} )
    .then(res => res.json())
    .catch(this.handleError);
  }
}
