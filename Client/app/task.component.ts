import { Component, OnInit } from '@angular/core'
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  moduleId: module.id,
  selector: 'task',
  templateUrl:'task.component.html'
})

export class TaskComponent implements OnInit{
  title: "List of notifications";
  tasks: Task[];
  flag:boolean;
  val:string;

  constructor (private taskService: TaskService) {}

  private ws : WebSocket;

  getTask(): void{
    this.taskService.getTask().then(tasks => this.tasks = tasks);
  }

  ngOnInit(): void{
    this.ws = new WebSocket("URL");
    this.ws.onmessage = (event) => {
      this.getTask();
    }
    this.flag = false;
  }

  //updateTask(): void{
  //this.getTask();
  //}

  confirm(id: number): void{
    this.taskService.check(id).then( msg => {
      this.flag = msg.approve;
      if(this.flag === true){
        //this.updateTask());
        this.val = 'Confirmed';
        console.log("confirmed");
      }
      else{
        this.val = 'Not Confirmed';
      }
    })
  }
}
