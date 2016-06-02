import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="keg-form">
      <h3>Edit {{keg.name}}:</h3>
      <label>Name: </label>
      <input [(ngModel)]="keg.name"><br>
      <label>Brand: </label>
      <input [(ngModel)]="keg.brand"><br>
      <label>Price: </label>
      <input [(ngModel)]="keg.price"><br>
      <label>Alcohol Content: </label>
      <input [(ngModel)]="keg.alcohol"><br>
      <label>Pints Remaining: </label>
      <input [(ngModel)]="keg.pints">
    </div>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;
}
