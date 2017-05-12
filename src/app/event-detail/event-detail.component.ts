import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  eventId = null;
  eventToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private eventService: EventService) { }

  rsvpButtonClicked(){
    console.log(this.eventId);
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.eventId = parseInt(urlParameters['id']);
   });
   this.eventToDisplay = this.eventService.getEventById(this.eventId);
  }
}
