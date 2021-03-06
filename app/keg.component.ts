import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
    <h3 (click)="displayBeer()">{{ keg.name }}</h3>
    <div *ngIf="beerVisible">
      <p>Brand: {{keg.brand}}</p>
      <p>Price: \${{keg.price}}.00</p>
      <p>Alcohol Content: {{keg.alcohol}}%</p>
      <p>Pints Remaining: {{keg.pints}}</p>
    </div>
    <button (click)="pintSold()">Sold pint</button>
  `
})

export class KegComponent {
  public keg: Keg;
  public beerVisible: boolean = false;
  public displayBeer() {
    if (this.beerVisible == true) {
      //if beer is visible (true) then hide it, by setting beerVisible to false.
      this.beerVisible = false;
    } else {
      //if the beer is invisible (false) then show it, by setting beerVisible to true.
      this.beerVisible = true;
    };
  }
  public pintSold() {
    this.keg.open = true;
    this.keg.pints = this.keg.pints - 1;
  }
}
