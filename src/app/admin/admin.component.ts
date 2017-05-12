import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  submitForm(title: string, topic: string, date: string, time: string, location: string, mentor: string, description: string, maximum: string, image:string) {
    var newEvent: Event = new Event(title, topic, date, time, location, mentor, description, parseInt(maximum), 0, image);
    this.eventService.addEvent(newEvent);
  }
}
