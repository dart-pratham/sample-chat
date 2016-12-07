import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login-page',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
  title = "Login";
  message: string;
  user:User ;
  attempt = false;

  constructor (private loginService:LoginService,private router:Router ) {}

  ngOnInit(){
    this.user=new User();
  }

  login():void{
    console.log(this.user.username, this.user.password);
    this.loginService.login(this.user.username,this.user.password).subscribe(flag=>{
      if(flag === true){
        this.message = 'Login Succesful';
        this.attempt= true;
        this.router.navigate(['/chat']);
      }else{
        this.message = 'Login Failed!';
        this.attempt= true;
      }
    });
  }
}
