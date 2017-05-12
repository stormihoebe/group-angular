import { Component, OnInit, Input } from '@angular/core';
import { Event } from "../event.model";
import { EventService } from "../event.service";
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
@Input() selectedEvent;
  constructor() { }

  ngOnInit(private eventService: EventService) {
  }

}
