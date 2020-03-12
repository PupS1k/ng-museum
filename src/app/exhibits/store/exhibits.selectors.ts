import {AppState} from '../../app.reducer';
import {createSelector} from '@ngrx/store';

export const selectExhibitState = (state: AppState) => state.exhibits;

export const selectExhibits = createSelector(
  selectExhibitState,
  (state) => state.exhibits
);

export const selectExhibit = createSelector(
  selectExhibitState,
  (state) => state.selectedExhibit
);
