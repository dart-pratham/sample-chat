import { Component,OnInit,Output } from '@angular/core';
import { User } from './user';
import { UserListService } from './user-list.service';

@Component({
  selector: 'user-list',
  template: `
    <ul *ngIf = "users">
      <user *ngFor= "let user of users" [user]= "user" (click) = "onSelect(user);"></user>
    </ul>
  `,
  providers: [ UserListService ]
})

export class UserListComponent implements OnInit {
  @Output() onSelected = new EventEmitter<User>();
  selectedUser: User;
  users: User[];
  constructor(private userListService:UserListService){}

  ngOnInit():void {
    this.getUsers();
  }

  getUsers():void {
    this.userListService.getUsers().then(users => this.users = users);
  }

  onSelect(usr:User):void{
    this.selectedUser = usr;
    this.onSelected.emit(usr);
  }
}
