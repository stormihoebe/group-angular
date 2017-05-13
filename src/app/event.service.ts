import { Injectable } from '@angular/core';
import {Event} from './event.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EventService {
  events: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.events= database.list('events');
 }

 getEvents(){
   return this.events;
 }
 getEventById(eventId: string){
  return this.database.object('events/' + eventId);
}
addEvent(newEvent: Event) {
  this.events.push(newEvent);
}

updateEvent(updatedEvent){
  var eventEntryInFirebase = this.getEventById(updatedEvent.$key);
  eventEntryInFirebase.update({title: updatedEvent.title,
                              topic: updatedEvent.topic,
                              date: updatedEvent.date,
                              time: updatedEvent.time,
                              location: updatedEvent.location,
                              mentor: updatedEvent.mentor,
                              maximum: updatedEvent.maximum,
                              guests: updatedEvent.guests,
                              image: updatedEvent.image,
                              description: updatedEvent.description,});
}
deleteEvent(eventToDelete){
  var eventEntryInFirebase = this.getEventById(eventToDelete.$key);
    eventEntryInFirebase.remove();
}
addNewGuest(event){
  var eventEntryInFirebase = this.getEventById(event.$key);
  var newGuests: number = 1 + parseInt(event.guests);
  eventEntryInFirebase.update({
    guests: newGuests
  });
}
}
