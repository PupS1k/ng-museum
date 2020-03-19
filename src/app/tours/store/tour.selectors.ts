import {AppState} from '../../app.reducer';
import {createSelector} from '@ngrx/store';
import {selectVisitorInfo} from '../../profile/store/profile.selectors';
import {selectIsGuide, selectIsVisitor} from '../../auth/store/auth.selectors';
import {FormControl, FormGroup, Validators} from '@angular/forms';


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

export const selectTourForm = createSelector(
  selectTour,
  (tour) => new FormGroup({
    duration: new FormControl(tour.duration, [Validators.required]),
    cost: new FormControl(tour.cost, [Validators.required]),
    imageUrl: new FormControl(tour.imageUrl, [Validators.required]),
    typeOfExhibits: new FormControl(tour.typeOfExhibits, [Validators.required]),
    theme: new FormControl(tour.theme, [Validators.required]),
  })
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
      return tourState.tourExhibits;
    } else {
      return [];
    }
  }
);


export const selectGuideOfTour = createSelector(
  selectToursState,
  selectIsGuide,
  (tourState, isGuide) => {
    if (isGuide && tourState.tourGuide) {
      if (tourState.tourGuide.username) {
        return [tourState.tourGuide];
      }
    }
    return [];
  }
);

export const selectVisitorsOfTour = createSelector(
  selectToursState,
  selectIsGuide,
  (tourState, isGuide) => {
    if (isGuide) {
      return tourState.tourVisitors;
    } else {
      return [];
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
