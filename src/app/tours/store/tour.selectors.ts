import {AppState} from '../../app.reducer';
import {createSelector} from '@ngrx/store';
import {selectVisitorInfo} from '../../profile/store/profile.selectors';


export const selectToursState = (state: AppState) => state.tours;

export const selectTours = createSelector(
  selectToursState,
  (state) => state.tours
);

export const selectTour = createSelector(
  selectToursState,
  (state) => state.selectedTour
);

export const selectTourId = createSelector(
  selectTour,
  (tour) => {
    if (tour) {
      return tour.tourId;
    }
  }
);

export const selectIsEditTour = createSelector(
  selectTour,
  tour => !!tour
);

export const selectExhibitsOfTour = createSelector(
  selectToursState,
  selectVisitorInfo,
  (tourState, visitorInfo) => {
    if (visitorInfo) {
      return tourState.exhibitsOfTour;
    } else {
      return null;
    }
  }
);

export const selectIsFavouriteTour = createSelector(
  selectToursState,
  selectVisitorInfo,
  (tourState, visitorInfo) => {
    if (visitorInfo) {
      return tourState.isFavouriteTour;
    } else {
      return null;
    }
  }
);
