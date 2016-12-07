import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs';

import { User } from './user'

@Injectable()
export class LoginService{
  token:string;
  constructor(private http:Http){
  }
  private loginUrl = "http://192.168.42.130:8000/get-token/";
  private headers = new Headers({'Content-Type':'application/json'});
  login(username: string , password: string):Observable<boolean>{
    return this.http.post(this.loginUrl,JSON.stringify({username: username,password: password}),{ headers:this.headers })
    .map(function(res:Response){
      let token = res.json().token;
      if(token){
        this.token = token;
        localStorage.setItem('token',token);
        return true;
      }else{
        return false;
      }
    });
  }
  logout():void{
    this.token
  }
}
