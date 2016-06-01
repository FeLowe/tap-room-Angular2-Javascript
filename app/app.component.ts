import { Component, EventEmitter  } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Keg List</h1>
      <div *ngFor="#keg of kegs" (click)='kegWasSelected(keg)'>
      <h3 (click)='detailsShown()'>{{keg.name}}</h3>
        <div *ngIf="showDetails" (click)='detailsHidden()'>
          <p>Brand: {{keg.brand}}</p>
          <p>Price: \${{keg.price}}.00</p>
          <p>Alcohol Content: {{keg.alcohol}}.00%</p>
        </div>
      </div>
    </div>
    `
})

export class AppComponent {
  public kegs: Keg[];
  public showDetails: boolean = false;
  constructor(){
    this.kegs = [
      new Keg('Irish Stout', 'Guinness', 5, 6, 0),
      new Keg('Session IPA', '10 Barrel', 6, 4, 1)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg);
  }

  detailsHidden() {
    this.showDetails = false;
    console.log(this.showDetails);

  }
  detailsShown() {
    this.showDetails = true;
    console.log(this.showDetails);
  }
}
