import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Event } from '../event.model';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meetup-search',
  templateUrl: './meetup-search.component.html',
  styleUrls: ['./meetup-search.component.css'],
  providers: []
})
export class MeetupSearchComponent implements OnInit {
  events;
  constructor(public eventService: EventService, public router: Router) { }

  ngOnInit() {
    this.events= this.eventService.getEvents();
  }

}
