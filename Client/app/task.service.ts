import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Task } from './task';
import { SyncService } from './sync.service';

@Injectable()
export class TaskService {
  task: Task;

  private TaskUrl = 'URL';
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

  private TaskPostUrl = 'URL';

  check(id: number): Promise<Task>{
    return this.sync.postRequest(this.TaskPostUrl, {id:id} )
    .then(res => res.json())
    .catch(this.handleError);
  }
}
