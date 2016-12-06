import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Message } from './message';

@Injectable()
export class SyncService {
  
  constructor(private http:Http) {}

  getRequest(req: string): Promise<Response> {
     return this.http.get(req).toPromise();
  }
  private headers = new Headers({'Content-Type':'application/json'});

  postRequest(req: string, data: any): Promise<Response> {
    return this.http.post(req, JSON.stringify(data), {headers: this.headers}).toPromise();
  }
}
