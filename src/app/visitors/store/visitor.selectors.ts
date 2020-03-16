import {AppState} from '../../app.reducer';
import {createSelector} from '@ngrx/store';
import {createFormVisitor} from '../utils';


export const selectVisitorState = (state: AppState) => state.visitors;

export const selectVisitors = createSelector(
  selectVisitorState,
  (state) => state.visitors
);

export const selectVisitor = createSelector(
  selectVisitorState,
  (state) => state.selectedVisitor
);

export const selectIsUpdateVisitor = createSelector(
  selectVisitor,
  (visitor) => !!visitor
);

export const selectVisitorForm = createSelector(
  selectVisitor,
  (visitor) => createFormVisitor(visitor)
);

export const selectVisitorId = createSelector(
  selectVisitor,
  (visitor) => {
    if (visitor) {
      return visitor.visitorId;
    }
  }
);
