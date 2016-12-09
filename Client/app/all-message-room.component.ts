import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector:'all-message-room',
  template:`
  <h1>{{title}}</h1>
  <a routerLink = "/filter">Filter Room</a>
  <div id="chatbox">
  <all-message-list></all-message-list>
  </div>
  <br><br>
  <div>
  <post-form></post-form>
  </div>
  `,
  styles:[`
    h1,div {
    margin-left: 25%;
    }
    #chatbox{
    height: 250px;
    width: 500px;
    background-color: grey;
    overflow: scroll;
    }
    `]
})

export class AllMessageRoom {
  title = "All Messages Room";
}
