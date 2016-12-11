import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { Message } from './message';

@Injectable()
export class SyncService {

  constructor(private http:Http,private router:Router) {}

  getRequest(req: string): Promise<Response> {
    var token = localStorage.getItem("token");
    var header = new Headers({'Authorization': 'token ' + token});
    var x = this;
    return this.http.get(req,{headers: header}).toPromise().catch(function(resp){
      console.log(resp, 1);
      if (resp.status === 401 ){
        console.log('401 error');
        localStorage.removeItem('token');
        x.router.navigate(['/login']);
      }
      return resp;
    });
  }

  postRequest(req: string, data: any): Promise<Response> {
    var token = localStorage.getItem("token");
    var header = new Headers();
    header.append("Content-Type", "application/json");
    header.append("Authorization", "token " + token);
    var x = this;
    return this.http.post(req, JSON.stringify(data), {headers: header}).toPromise().catch(function(resp){
      if (resp.status === 401){
        console.log('401 error');
        localStorage.removeItem('token');
        x.router.navigate(['/login']);
      }
      return resp;
  })
  }
}
