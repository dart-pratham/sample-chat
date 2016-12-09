import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent} from './login.component';
import { AllMessageRoom } from './all-message-room.component';
import { TaskComponent } from './task.component';
//import { ChatroomComponent } from './chatroom.component';

const routes : Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:'chat',component: AllMessageRoom },
  { path:'task', component: TaskComponent },
  { path: 'login',component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
