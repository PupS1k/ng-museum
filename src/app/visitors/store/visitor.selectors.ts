import {AppState} from '../../app.reducer';
import {createSelector} from '@ngrx/store';


export const selectVisitorState = (state: AppState) => state.visitors;

export const selectVisitors = createSelector(
  selectVisitorState,
  (state) => state.visitors
);

export const selectVisitor = createSelector(
  selectVisitorState,
  (state) => state.selectedVisitor
);
