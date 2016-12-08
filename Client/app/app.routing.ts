import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent} from './login.component';
import { ChatroomComponent } from './chatroom.component';
import { FilterroomComponent } from './filterroom.component';

const routes : Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:'chat',component: ChatroomComponent },
  { path: 'login',component: LoginComponent },
  { path: 'filterroom',component: FilterroomComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
