import {ActionReducerMap} from '@ngrx/store';

import {State as ExhibitState, exhibitReducer} from './exhibits/store/exhibit.reducer';
import {State as AuthState, authReducer} from './auth/store/auth.reducer';
import {State as GuideState, guideReducer} from './guides/store/guide.reducer';
import {State as ProfileState, profileReducer} from './profile/store/profile.reducer';
import {State as VisitorState, visitorReducer} from './visitors/store/visitor.reducer';

export interface AppState {
  exhibits: ExhibitState;
  auth: AuthState;
  guides: GuideState;
  profile: ProfileState;
  visitors: VisitorState;
}

export const appReducer: ActionReducerMap<AppState> = {
  exhibits: exhibitReducer,
  auth: authReducer,
  guides: guideReducer,
  profile: profileReducer,
  visitors: visitorReducer,
};
