import {Component} from '@angular/core';

@Component({
  selector: 'app-exhibits',
  template: `
    <app-exhibit-list
      [showMode]="'list'"
    ></app-exhibit-list>
  `
})
export class ExhibitsComponent {}
