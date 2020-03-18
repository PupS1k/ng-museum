import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.reducer';
import {selectIsGuide, selectIsVisitor} from '../../../auth/store/auth.selectors';
import {selectExhibit} from '../../store/exhibits.selectors';

@Component({
  selector: 'app-exhibit-details',
  template: `
    <app-exhibit-details-presentation
      [exhibit]="exhibit$ | async"
      [isGuide]="isGuide$ | async"
      [isVisitor]="isVisitor$ | async"
    ></app-exhibit-details-presentation>
  `
})
export class ExhibitDetailsSmartComponent {
  exhibit$ = this.store.select(selectExhibit);
  isGuide$ = this.store.select(selectIsGuide);
  isVisitor$ = this.store.select(selectIsVisitor);

  constructor(private store: Store<AppState>) {}
}
