import {AppState} from '../../app.reducer';
import {createSelector} from '@ngrx/store';
import {selectVisitorInfo} from '../../profile/store/profile.selectors';
import {selectIsGuide, selectIsVisitor} from '../../auth/store/auth.selectors';


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

export const selectIsTour = createSelector(
  selectTour,
  tour => !!tour
);

export const selectExhibitsOfTour = createSelector(
  selectToursState,
  selectIsVisitor,
  (tourState, isVisitor) => {
    if (isVisitor) {
      return tourState.exhibitsOfTour;
    }
  }
);


export const selectGuideOfTour = createSelector(
  selectToursState,
  selectIsGuide,
  (tourState, isGuide) => {
    if (isGuide && tourState.tourGuide) {
      return [tourState.tourGuide];
    } else {
      return [];
    }
  }
);

export const selectVisitorsOfTour = createSelector(
  selectToursState,
  selectIsGuide,
  (tourState, isGuide) => {
    if (isGuide) {
      return tourState.tourVisitors;
    }
  }
);

export const selectIsFavouriteTour = createSelector(
  selectToursState,
  selectVisitorInfo,
  (tourState, visitorInfo) => {
    if (visitorInfo) {
      return tourState.isFavouriteTour;
    }
  }
);
