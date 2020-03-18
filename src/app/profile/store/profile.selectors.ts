import {createSelector} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {createFormGuide} from '../../guides/utils';
import {createFormVisitor} from '../../visitors/utils';

export const selectProfileState = (state: AppState) => state.profile;

export const selectProfileMode = createSelector(
  selectProfileState,
  (state) => state.profileMode
);

export const selectUserIsGuide = createSelector(
  selectProfileMode,
  (profileMode) => profileMode === 'guide'
);

export const selectUserIsVisitor = createSelector(
  selectProfileMode,
  (profileMode) => profileMode === 'visitor'
);

export const selectVisitorInfo = createSelector(
  selectProfileState,
  (state) => state.userVisitorInfo
);

export const selectFavouriteTours = createSelector(
  selectVisitorInfo,
  (visitor) => {
    if (visitor) {
      return visitor.tourEntitySet;
    }
  }
);

export const selectGuideInfo = createSelector(
  selectProfileState,
  (state) => state.userGuideInfo
);

export const selectUserVisitorId = createSelector(
  selectVisitorInfo,
  (userVisitorInfo) => {
    if (userVisitorInfo) {
      return userVisitorInfo.visitorId;
    }
  }
);

export const selectUserGuideId = createSelector(
  selectGuideInfo,
  (userGuideInfo) => {
    if (userGuideInfo) {
      return userGuideInfo.guideId;
    }
  }
);

export const selectUserId = createSelector(
  selectUserIsGuide,
  selectUserIsVisitor,
  selectUserVisitorId,
  selectUserGuideId,
  (userIsGuide, userIsVisitor, userVisitorId, userGuideId) => {
    if (userIsGuide) {
      return userGuideId;
    } else if (userIsVisitor) {
      return userVisitorId;
    }
  }
);

export const selectUserForm = createSelector(
  selectUserIsGuide,
  selectUserIsVisitor,
  selectVisitorInfo,
  selectGuideInfo,
  (userIsGuide, userIsVisitor, userVisitorInfo, userGuideInfo) => {
    if (userIsGuide) {
      return createFormGuide(userGuideInfo);
    } else if (userIsVisitor) {
      return createFormVisitor(userVisitorInfo);
    }
  }
);
