import {ActionReducerMap} from '@ngrx/store';

import {State as ExhibitState, exhibitReducer} from './exhibits/store/exhibit.reducer';
import {State as AuthState, authReducer} from './auth/store/auth.reducer';

export interface AppState {
  exhibits: ExhibitState;
  auth: AuthState;
}

export const appReducer: ActionReducerMap<AppState> = {
  exhibits: exhibitReducer,
  auth: authReducer,
};
