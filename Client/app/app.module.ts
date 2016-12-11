import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AllMessageListComponent} from './chatroom.component';
import { AllMessageRoom } from './all-message-room.component';
import { MessageComponent } from './messagecomponent';
import { MessageListComponent } from './messagelist.component';
import { LoginComponent } from './login.component';
import { TaskComponent } from './task.component';
import { PostComponent } from './post.component';
import { FilterRoomComponent } from './Filterroom.component';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list.component';
import { UserMessageListComponent } from './chatroom.component';

import { AppRoutingModule } from './app.routing';

import { MessageService } from './message.service';
import { LoginService } from './login.service';
import { SyncService } from './sync.service';
import { TaskService } from './task.service';
import { UserListService } from './user-list.service';
import { AuthGuard } from './auth-guard.service'
import { LoginGuard } from './login-guard.service'

@NgModule({
  imports:      [ BrowserModule,FormsModule,AppRoutingModule,HttpModule ],
  declarations: [ AppComponent, AllMessageRoom,AllMessageListComponent,LoginComponent, FilterRoomComponent, MessageComponent, MessageListComponent, TaskComponent, PostComponent,UserComponent, UserListComponent,UserMessageListComponent],
  providers:    [ AuthGuard,  LoginGuard, MessageService,LoginService,SyncService,TaskService,UserListService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
