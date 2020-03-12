import {AppState} from '../../app.reducer';
import {createSelector} from '@ngrx/store';

export const selectAuthState = (state: AppState) => state.auth;

export const selectUsername = createSelector(
  selectAuthState,
  (state) => state.name
);

export const selectIsGuide = createSelector(
  selectAuthState,
  (state) => state.isGuide
);
export const selectIsVisitor = createSelector(
  selectAuthState,
  (state) => state.isVisitor
);
export const selectIsAdmin = createSelector(
  selectAuthState,
  (state) => state.isAdmin
);
