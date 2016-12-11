import { Component,Input } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'filter-room',
  template: `
    <div id = "user-dropdown" >
      <user-list [users] = "users" (onSelected) = "onSelect($event)" ></user-list>
    </div>
    <div id = "user-msg-list"  *ngIf = "chat_user">
      <user-message-list [user] = "chat_user"></user-message-list>
    </div>
  `
})

export class FilterRoomComponent {
  @Input()
  users: User[];
  chat_user: User;
  onSelect(usr: User){
    this.chat_user = usr;
  }
}
