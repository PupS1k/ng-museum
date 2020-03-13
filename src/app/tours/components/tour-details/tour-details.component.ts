import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {selectExhibitsOfTour, selectIsFavouriteTour, selectIsTour, selectTour} from '../../store/tour.selectors';
import {AddFavouriteTourStart, DeleteFavouriteTourStart} from '../../store/tour.actions';
import {selectIsGuide} from '../../../auth/store/auth.selectors';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss']
})
export class TourDetailsComponent {
  tour$ = this.store.select(selectTour);
  exhibits$ = this.store.select(selectExhibitsOfTour);
  isFavouriteTour$ = this.store.select(selectIsFavouriteTour);
  isGuide$ = this.store.select(selectIsGuide);
  isTour$ = this.store.select(selectIsTour);

  constructor(private store: Store<AppState>) {}

  onDeleteTourFromFavourites() {
    this.store.dispatch(new DeleteFavouriteTourStart());
  }

  onAddTourIntoFavourites() {
    this.store.dispatch(new AddFavouriteTourStart());
  }
}
