import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { SyncService } from './sync.service';

import { User } from './user';
import { IP } from './ip.address';

@Injectable()
export class UserListService {

  private getUsersUrl = 'http://'+IP+'/filter/';

  constructor(private syncService:SyncService) { }

  getUsers():Promise<User[]>{
    return this.syncService.getRequest(this.getUsersUrl).then(function(res){
      console.log(res.json());
      return (res.json() as User[]);
    })
  }
}
