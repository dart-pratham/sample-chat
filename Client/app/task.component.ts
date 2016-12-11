import { Component, OnInit } from '@angular/core'
import { Task } from './task';
import { TaskService } from './task.service';
import { IP } from './ip.address';

@Component({
  moduleId: module.id,
  selector: 'task',
  styles:[`
    .change{
    color:yellow;
    }
    h1{
    margin-left:25%;
    }
    div{
    left-margin:25%;
    border: 2px;
    }
    `],
    templateUrl:'task.component.html'
})

export class TaskComponent implements OnInit{
  title = "List of notifications";
  tasks: Task[];
  flag:boolean;
  val:string;

  constructor (private taskService: TaskService) {}

  private ws : WebSocket;

  getTask(): void{
    this.taskService.getTask().then(tasks => this.tasks = tasks);
  }

  ngOnInit(): void{
    this.ws = new WebSocket("ws://" + IP + "/ws/notifychannel?subscribe-broadcast");
    this.ws.onmessage = (event) => {
      this.getTask();
    }
    this.flag = false;
  }

  confirm(id: number): void{
    this.taskService.check(id).then( msg => {})
  }
}
