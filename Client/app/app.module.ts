import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ChatroomComponent } from './chatroom.component';
import { LoginComponent } from './login.component';

import { AppRoutingModule } from './app.routing';

import { MessageService } from './message.service';
import { LoginService } from './login.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule,AppRoutingModule,HttpModule ],
  declarations: [ AppComponent,
    ChatroomComponent,LoginComponent
  ],
  providers: [ MessageService,LoginService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
