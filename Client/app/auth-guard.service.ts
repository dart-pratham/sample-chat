import { Injectable }     from '@angular/core';
import { CanActivate, Router, NavigationStart}    from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router:Router) {}

  canActivate() {
    if(!(localStorage.getItem("token"))) {
      this.router.navigate(['/login']);
      console.log(this.router.url,1);
      return false;
    } else {
      return true;
    }
  }
}
