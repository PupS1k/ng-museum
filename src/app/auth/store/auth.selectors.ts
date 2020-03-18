import {AppState} from '../../app.reducer';
import {createSelector} from '@ngrx/store';

export const selectAuthState = (state: AppState) => state.auth;

export const selectUsername = createSelector(
  selectAuthState,
  (state) => state.username
);

export const selectIsAuthenticated = createSelector(
  selectUsername,
  (username) => !!username
);

export const selectRoles = createSelector(
  selectAuthState,
  (state) => state.roles
);

export const selectIsGuide = createSelector(
  selectRoles,
  (roles) => roles.includes('ROLE_GUIDE')
);
export const selectIsVisitor = createSelector(
  selectRoles,
  (roles) => roles.includes('ROLE_VISITOR')
);
export const selectIsAdmin = createSelector(
  selectRoles,
  (roles) => roles.includes('ROLE_ADMIN')
);
