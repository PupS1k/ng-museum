import {AppState} from '../../app.reducer';
import {createSelector} from '@ngrx/store';


export const selectSharedState = (state: AppState) => state.layout;

export const selectMessage = createSelector(
  selectSharedState,
  (state) => state.message
);

export const selectIsLoading = createSelector(
  selectSharedState,
  (state) => state.isLoading
);
