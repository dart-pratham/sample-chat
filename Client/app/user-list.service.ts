import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { SyncService } from './sync.service';

import { User } from './user';

@Injectable()
export class UserListService {

  private getUsersUrl = 'http://192.168.2.184:8000/filter/'

  constructor(private syncService:SyncService) { }

  getUsers():Promise<User[]>{
    return this.syncService.getRequest(this.getUsersUrl).then(function(res){
      console.log(res.json());
      return (res.json() as User[]);
    })
  }
}
