import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent} from './login.component';
import { ChatroomComponent } from './chatroom.component';
import { TaskComponent } from './task.component';

const routes : Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:'chat',component: ChatroomComponent },
  { path:'task', component: TaskComponent },
  { path: 'login',component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
