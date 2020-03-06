import {ActionReducerMap} from '@ngrx/store';

import {State as ExhibitState, exhibitReducer} from './exhibits/store/exhibit.reducer';

export interface AppState {
  exhibits: ExhibitState;
}

export const appReducer: ActionReducerMap<AppState> = {
  exhibits: exhibitReducer,
};
