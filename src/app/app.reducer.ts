import {ActionReducerMap} from '@ngrx/store';

import {State as ExhibitState, exhibitReducer} from './exhibits/store/exhibit.reducer';
import {State as AuthState, authReducer} from './auth/store/auth.reducer';
import {State as GuideState, guideReducer} from './guides/store/guide.reducer';

export interface AppState {
  exhibits: ExhibitState;
  auth: AuthState;
  guides: GuideState
}

export const appReducer: ActionReducerMap<AppState> = {
  exhibits: exhibitReducer,
  auth: authReducer,
  guides: guideReducer
};
