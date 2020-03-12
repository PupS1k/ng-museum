import {AppState} from '../../app.reducer';
import {createSelector} from '@ngrx/store';
import {createFormGuide} from '../utils';


export const selectGuideState = (state: AppState) => state.guides;

export const selectGuides = createSelector(
  selectGuideState,
  state => state.guides
);

export const selectGuide = createSelector(
  selectGuideState,
  state => state.selectedGuide
);

export const selectGuideId = createSelector(
  selectGuide,
  guide => {
    if (guide) {
      return guide.guideId;
    }
  }
);

export const selectFormGuide = createSelector(
  selectGuide,
  guide => createFormGuide(guide)
);

export const selectIsUpdateGuide = createSelector(
  selectGuide,
  guide => !!guide
);
