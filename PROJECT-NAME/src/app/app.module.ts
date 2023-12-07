import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChatBarComponent } from './chat-bar/chat-bar.component';
import { FormsModule } from '@angular/forms';
import { ChatHistoryComponent } from './chat-history/chat-history.component';
import { NickNameComponent } from './nick-name/nick-name.component';
import {PersonService} from "./person.service"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChatBarComponent,
    ChatHistoryComponent,
    NickNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClient, 
    HttpHeaders
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
