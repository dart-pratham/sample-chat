import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { User } from './user';
import { IP } from './ip.address';

@Injectable()
export class LoginService{
  token:string;
  constructor(private http:Http){
  }
  private loginUrl = "http://"+IP+"/get-token/";
  private headers = new Headers({'Content-Type':'application/json'});
  login(username: string , password: string):Promise<boolean>{
    return this.http.post(this.loginUrl,JSON.stringify({username: username,password: password}),{ headers:this.headers })
    .toPromise()
    .then(function(res:Response){
      let token = res.json() && res.json().token;
      if(token){
        localStorage.setItem('token',token);
        return true;
      }else{
        return false;
      }
    });
  }
  logout():void{
    this.token = null;
    localStorage.clear();
  }
}
