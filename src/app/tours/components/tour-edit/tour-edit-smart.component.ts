import {Component} from '@angular/core';
import {selectExhibitsOfTour, selectGuideOfTour, selectIsTour, selectVisitorsOfTour} from '../../store/tour.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';

@Component({
  selector: 'app-tour-edit',
  template: `
    <app-tour-edit-presentation
      [isTour]="isTour$ | async"
      [visitors]="visitors$ | async"
      [guide]="guide$ | async"
      [exhibits]="exhibits$ | async"
    ></app-tour-edit-presentation>
  `
})
export class TourEditSmartComponent {
  isTour$ = this.store.select(selectIsTour);
  exhibits$ = this.store.select(selectExhibitsOfTour);
  visitors$ = this.store.select(selectVisitorsOfTour);
  guide$ = this.store.select(selectGuideOfTour);

  constructor(private store: Store<AppState>) {}
}
