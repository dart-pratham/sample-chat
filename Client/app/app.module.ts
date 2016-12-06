import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'

import { AppComponent }  from './app.component';
import { ChatroomComponent } from './chatroom.component';

import { MessageService } from './message.service';

@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ AppComponent,
    ChatroomComponent
  ],
  providers: [ MessageService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
