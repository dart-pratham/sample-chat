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
    return this.http.get(req,{headers: header}).toPromise().then(function(response){
      if (response.status === 401){
        this.router.navigate(['/login']);
      }
    });
    //return this.http.get(req,{headers: header}).toPromise();
  }

  postRequest(req: string, data: any): Promise<Response> {
    var token = localStorage.getItem("token");
    var header = new Headers();
    header.append("Content-Type", "application/json");
    header.append("Authorization", "token " + token);
    return this.http.post(req, JSON.stringify(data), {headers: header}).toPromise().then(function(response){
      if (response.status === 401){
        this.router.navigate(['/login']);
      }
    })
    //return this.http.post(req, JSON.stringify(data), {headers: header}).toPromise();
  }
}
