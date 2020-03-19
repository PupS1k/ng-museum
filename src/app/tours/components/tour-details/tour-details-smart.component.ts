import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.reducer';
import {selectExhibitsOfTour, selectIsFavouriteTour, selectIsTour, selectTour} from '../../store/tour.selectors';
import {AddFavouriteTourStart, DeleteFavouriteTourStart} from '../../store/tour.actions';
import {selectIsGuide} from '../../../auth/store/auth.selectors';
import {Tour} from '../../models/tour.model';

@Component({
  selector: 'app-tour-details',
  template: `
    <app-tour-details-presentation
      [tour]="tour$ | async"
      [exhibits]="exhibits$ | async"
      [isFavouriteTour]="isFavouriteTour$ | async"
      [isGuide]="isGuide$ | async"
      [isTour]="isTour$ | async"
      (add)="onAddTourIntoFavourites($event)"
      (delete)="onDeleteTourFromFavourites($event)"
    ></app-tour-details-presentation>
  `
})
export class TourDetailsSmartComponent {
  tour$ = this.store.select(selectTour);
  exhibits$ = this.store.select(selectExhibitsOfTour);
  isFavouriteTour$ = this.store.select(selectIsFavouriteTour);
  isGuide$ = this.store.select(selectIsGuide);
  isTour$ = this.store.select(selectIsTour);

  constructor(private store: Store<AppState>) {}

  onDeleteTourFromFavourites(tourId: Tour['tourId']) {
    this.store.dispatch(new DeleteFavouriteTourStart(tourId));
  }

  onAddTourIntoFavourites(tourId: Tour['tourId']) {
    this.store.dispatch(new AddFavouriteTourStart(tourId));
  }
}
