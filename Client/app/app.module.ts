import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ChatroomComponent } from './chatroom.component';
import { MessageComponent } from './messagecomponent';
import { MessageListComponent } from './messagelist.component';
import { LoginComponent } from './login.component';
import { TaskComponent } from './task.component';

import { AppRoutingModule } from './app.routing';

import { MessageService } from './message.service';
import { LoginService } from './login.service';
import { SyncService } from './sync.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule,AppRoutingModule,HttpModule ],
  declarations: [ AppComponent, ChatroomComponent,LoginComponent, MessageComponent, MessageListComponent, TaskComponent ],
  providers:    [ MessageService,LoginService,SyncService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
