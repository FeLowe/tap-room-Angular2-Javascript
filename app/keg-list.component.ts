import { Component, EventEmitter  } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { AddKegComponent } from './add-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, AddKegComponent],
  template: `
    <keg-display *ngFor="#currentKeg of kegList"
      (click)="kegClicked(currentKeg)"
      [class.seleted]='currentKeg === selectedKeg'
      [keg]='currentKeg'>
    </keg-display>
    <edit-keg-details *ngIf='selectedKeg' [keg]='selectedKeg'>
    </edit-keg-details>
    <add-keg></add-keg>
  `
})

export class KegListComponent{
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void{
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
}
