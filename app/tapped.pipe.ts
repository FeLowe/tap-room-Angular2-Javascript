import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "open",
  pure: false
})
export class TappedPipe implements PipeTransform {
  transform(kegList: Keg[], args) {
    var userSelection = args[0];
    if(userSelection === "open") {
      return kegList.filter((keg) => {
        // if (keg.open === true) {
        //   return true;
        // } else {
        //   return false;
        // }
        return keg.open;
      });
    } else if (userSelection === "full") {
      return kegList.filter((keg) => {
        return !keg.open;
      });
    } else if (userSelection === "almostEmpty") {
      return kegList.filter((keg) => {
        // if (keg.pints <= 10){
        //   return true;
        // } else {
        //   return false;
        // }
        return keg.pints <= 10;
      });
    } else {
      return kegList;
    }
  }
}



//  });
// }
