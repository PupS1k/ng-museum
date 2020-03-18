import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';

import {Exhibit} from '../../models/exhibit.model';
import {AppState} from '../../../app.reducer';
import {selectIsGuide} from '../../../auth/store/auth.selectors';
import {selectIsTour} from '../../../tours/store/tour.selectors';

@Component({
  selector: 'app-exhibit-item',
  template: `
    <app-exhibit-item-presentation
      [isTour]="isTour$ | async"
      [exhibit]="exhibit"
      [isGuide]="isGuide$ | async"
    ></app-exhibit-item-presentation>
  `
})
export class ExhibitItemSmartComponent {
  @Input() exhibit: Exhibit;
  isGuide$ = this.store.select(selectIsGuide);
  isTour$ = this.store.select(selectIsTour);

  constructor(private store: Store<AppState>) {}
}
