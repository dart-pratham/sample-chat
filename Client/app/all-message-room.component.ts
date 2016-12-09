import { Component } from '@angular/core';

@Component({
  selector:'all-message-room',
  template:`
  <h1>{{title}}</h1>
  <div>
  <div id="chatbox">
  <all-message-list><all-message-list>
  </div>
  <post-from><post-form>
  </div>
  `,
  styles:[`
    #chatbox{
    height: 250px;
    width: 500px;
    background-color: grey;
    overflow: scroll;
    }
    `]
})

export class AllMessageRoom {
  title = "All Messages Room"
}
