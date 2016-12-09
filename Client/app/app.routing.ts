import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent} from './login.component';
import { ChatroomComponent } from './chatroom.component';
import { FilterRoomComponent } from './Filterroom.component';

const routes : Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path: 'chat',component: ChatroomComponent },
  { path: 'login',component: LoginComponent },
  { path: 'filter',component: FilterRoomComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
