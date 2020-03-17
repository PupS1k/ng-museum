import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.reducer';
import {selectIsGuide} from '../../../auth/store/auth.selectors';
import {selectExhibits} from '../../store/exhibits.selectors';
import {selectIsTour} from '../../../tours/store/tour.selectors';

@Component({
  selector: 'app-exhibit-list',
  template: `
    <app-exhibit-list-presentation
      [exhibits]="exhibits$ | async"
      [showMode]="showMode"
      [isTour]="isTour$ | async"
    ></app-exhibit-list-presentation>
  `
})
export class ExhibitListComponent {
  exhibits$ = this.store.select(selectExhibits);
  isTour$ = this.store.select(selectIsTour);

  @Input() showMode: string;

  constructor(private store: Store<AppState>) {}
}
