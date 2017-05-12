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
   console.log("HEY getEvents Here!");
   return this.events;
 }
 getEventById(eventId: string){
  return this.database.object('events/' + eventId);
}

}
