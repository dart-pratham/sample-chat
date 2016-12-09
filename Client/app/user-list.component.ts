import { Component,OnInit,Output,EventEmitter,Input } from '@angular/core';
import { User } from './user';
import { UserListService } from './user-list.service';

@Component({
  selector: 'user-list',
  template: `
    <ul *ngIf = "users">
      <ur *ngFor= "let user of users" [user]= "user" (click) = "onSelect(user);"></ur>
    </ul>
  `,
  providers: [ UserListService ]
})

export class UserListComponent implements OnInit {
  @Input()
  users: User[];
  @Output() onSelected = new EventEmitter<User>();
  selectedUser: User;
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
