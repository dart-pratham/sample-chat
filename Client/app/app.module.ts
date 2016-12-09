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

import { AppRoutingModule } from './app.routing';

import { MessageService } from './message.service';
import { LoginService } from './login.service';
import { SyncService } from './sync.service';
import { TaskService } from './task.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule,AppRoutingModule,HttpModule ],
  declarations: [ AppComponent, AllMessageRoom,AllMessageListComponent,LoginComponent, MessageComponent, MessageListComponent, TaskComponent, PostComponent],
  providers:    [ MessageService,LoginService,SyncService,TaskService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
