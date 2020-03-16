import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {selectTours} from '../../store/tour.selectors';
import {selectIsGuide} from '../../../auth/store/auth.selectors';

@Component({
  selector: 'app-tours-list',
  template: `
    <app-tours-list-presentation
      [tours]="tours$ | async"
      [isGuide]="isGuide$ | async"
    ></app-tours-list-presentation>
  `
})
export class ToursListComponent {
  tours$ = this.store.select(selectTours);
  isGuide$ = this.store.select(selectIsGuide);

  constructor(private store: Store<AppState>) {}
}
