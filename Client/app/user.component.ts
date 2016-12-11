import { Component,Input } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'ur',
  template: `
    <li *ngIf= "user">{{user.username}}></li>
  `
})

export class UserComponent{
  @Input()
  user: User;
}
