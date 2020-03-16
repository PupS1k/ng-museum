import {Component} from '@angular/core';

import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {selectGuides} from '../../store/guide.selectors';

@Component({
  selector: 'app-guides-list',
  template: `
    <app-guides-list-presentation
      [guides]="guides$ | async"
    ></app-guides-list-presentation>
  `
})
export class GuidesListComponent {
  guides$ = this.store.select(selectGuides);

  constructor(private store: Store<AppState>) {}
}
