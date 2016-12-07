import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ChatroomComponent } from './chatroom.component';
<<<<<<< HEAD
import { MessageComponent } from './messagecomponent';
=======
import { LoginComponent } from './login.component';

import { AppRoutingModule } from './app.routing';
>>>>>>> 9d685d2fda30ac06e0e6c5685826312f025be8ea

import { MessageService } from './message.service';
import { LoginService } from './login.service';
import { SyncService } from './sync.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule,AppRoutingModule,HttpModule ],
  declarations: [ AppComponent,
    ChatroomComponent,LoginComponent
  ],
  providers: [ MessageService,LoginService,SyncService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
