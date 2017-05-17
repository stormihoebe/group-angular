import { Pipe, PipeTransform } from '@angular/core';
import {Event} from './event.model';

@Pipe({
  name: "topic",
  pure: false
})
export class TopicPipe implements PipeTransform {

  transform(input: Event[], desiredTopic) {
    var output: Event[] = [];
    if(input){


    if(desiredTopic === "All") {
      for (var i = 0; i < input.length; i++) {
         output.push(input[i]);
       }
       return output;
    } else if (desiredTopic === "JavaScript"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].topic === "JavaScript") {
          output.push(input[i]);
        }
      }
      return output;
  } else if (desiredTopic === "Java"){
    for (var i = 0; i < input.length; i++) {
      if (input[i].topic === "Java") {
        output.push(input[i]);
      }
    }
    return output;
} else if (desiredTopic === "Career Development"){
  for (var i = 0; i < input.length; i++) {
    if (input[i].topic === "Career Development") {
      output.push(input[i]);
    }
  }
  return output;
} else if (desiredTopic === "Diversity"){
  for (var i = 0; i < input.length; i++) {
    if (input[i].topic === "Diversity") {
      output.push(input[i]);
    }
  }
  return output;
}
 else if (desiredTopic === "Other"){
  for (var i = 0; i < input.length; i++) {
    if ((input[i].topic !== "JavaScript" )||( input[i].topic !== "Career Development") || (input[i].topic !=="Java")){
      output.push(input[i]);
    }
  }
  return output;
} else {
  for (var i = 0; i < input.length; i++) {
     output.push(input[i]);
   }
   return output;
  }
}
}
}
