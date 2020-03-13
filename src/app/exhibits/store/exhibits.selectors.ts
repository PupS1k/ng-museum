import {AppState} from '../../app.reducer';
import {createSelector} from '@ngrx/store';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export const selectExhibitState = (state: AppState) => state.exhibits;

export const selectExhibits = createSelector(
  selectExhibitState,
  (state) => state.exhibits
);

export const selectExhibit = createSelector(
  selectExhibitState,
  (state) => state.selectedExhibit
);

export const selectExhibitId = createSelector(
  selectExhibit,
  (exhibit) => exhibit.exhibitId
);

export const selectExhibitTours = createSelector(
  selectExhibit,
  (exhibit) => exhibit.tourEntitySet
);

export const selectIsExhibit = createSelector(
  selectExhibit,
  (exhibit) => !!exhibit
);
