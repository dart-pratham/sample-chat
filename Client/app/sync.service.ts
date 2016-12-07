import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Message } from './message';

@Injectable()
export class SyncService {

  constructor(private http:Http) {}

  getRequest(req: string): Promise<Response> {
    var token = localStorage.getItem("token");
    var header = new Headers({'Authorization': ' ' + token});
    return this.http.get(req,{headers: header}).toPromise();
  }

  postRequest(req: string, data: any): Promise<Response> {
    var token = localStorage.getItem("token");
    var header = new Headers([{'Content-Type':'application/json'},{'Authorization': 'token ' + token }]);
    return this.http.post(req, JSON.stringify(data), {headers: header}).toPromise();
  }
}
