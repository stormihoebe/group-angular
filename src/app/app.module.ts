import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from  './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MeetupSearchComponent } from './meetup-search/meetup-search.component';
import {EventService} from './event.service'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MeetupSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
