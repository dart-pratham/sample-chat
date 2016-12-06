import { Injectable } from '@angular/core';
import { Headers, Http  } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Message } from './message';
@Injectable()

export class MessageService {
  private ChatUrl = '/';
  constructor (private http:Http) {}

  getMessage(): Promise<Message[]> {
    return this.http.get(this.ChatUrl).toPromise()
    .then(response => response.json().data as Message[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred',error);
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'content-Type':'application/json'});

  private PostUrl = '/post';

  add(name: string): Promise<Message> {
    return this.http
    .post(this.PostUrl , JSON.stringify({text: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
  }

}

