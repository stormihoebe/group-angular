import { Injectable } from '@angular/core';
import {Event} from './event.model';

@Injectable()
export class EventService {

  constructor() {
 }

 getEvents(){
   console.log("HEY getEvents Here!");
 }
 getEventById(eventId: string){
}

}
