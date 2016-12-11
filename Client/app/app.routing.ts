import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent} from './login.component';
import { FilterRoomComponent } from './Filterroom.component';
import { AllMessageRoom } from './all-message-room.component';
import { TaskComponent } from './task.component';

import { AuthGuard } from './auth-guard.service';
import { LoginGuard } from './login-guard.service';

const routes : Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:'chat',canActivate: [AuthGuard], component: AllMessageRoom },
  { path:'task',canActivate: [AuthGuard],  component: TaskComponent },
  { path: 'login',canActivate: [LoginGuard],component: LoginComponent },
  { path: 'filter',canActivate: [AuthGuard], component: FilterRoomComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
