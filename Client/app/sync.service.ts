import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Message } from './message';

@Injectable()
export class SyncService {

  constructor(private http:Http) {}

  getRequest(req: string): Promise<Response> {
    private token = localStorage.getItem("token");
    private headers = new Headers({'Authorization': ' ' + this.token});
    return this.http.get(req,{headers: this.headers}).toPromise();
  }

  postRequest(req: string, data: any): Promise<Response> {
    private token = localStorage.getItem("token");
    private headers = new Headers({'Content-Type':'application/json'},{'Authorization':' ' + this.token});
    return this.http.post(req, JSON.stringify(data), {headers: this.headers}).toPromise();
  }
}
