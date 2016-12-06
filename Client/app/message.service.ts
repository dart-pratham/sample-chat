import { Injectable } from '@angular/core';
import { Headers, Http  } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Message } from './message';
//import { IpUrl } from './ipurl';
@Injectable()

export class MessageService {
  private ChatUrl = 'http://192.168.2.115:8000/';
  constructor (private http:Http) {}

  getMessage(): Promise<Message[]> {
    return this.http.get(this.ChatUrl).toPromise()
    .then(response => response.json() as Message[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred',error);
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type':'application/json'});

  private PostUrl = 'http://192.168.2.115:8000/post/';

  add(name: string): Promise<Message[]> {
    return this.http
    .post(this.PostUrl , JSON.stringify({text: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
  }
}
