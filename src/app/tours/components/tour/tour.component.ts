import {Component, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';

import {ClearSelectedTour} from '../../store/tour.actions';
import {AppState} from '../../../app.reducer';

@Component({
  selector: 'app-tour',
  template: `<router-outlet></router-outlet>`
})
export class TourComponent implements OnDestroy {
  constructor(private store: Store<AppState>) {
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ClearSelectedTour());
  }
}
