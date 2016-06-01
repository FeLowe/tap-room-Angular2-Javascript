import { Component, EventEmitter  } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';



@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>Keg List</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg('Irish Stout', 'Guinness', 5, 6, 124, 0),
      new Keg('Session IPA', '10 Barrel', 6, 4, 124, 1)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }
}
