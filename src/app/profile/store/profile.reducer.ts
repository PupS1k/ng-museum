import {Visitor} from '../../visitors/models/visitor.model';
import {Guide} from '../../guides/models/guide.model';
import {
  CLEAR_USER_INFO,
  DELETE_FAVOURITE_TOUR_SUCCESS,
  FETCH_GUIDE_INFO_SUCCESS,
  FETCH_VISITOR_INFO_SUCCESS,
  ProfileActions,
  SET_PROFILE_MODE
} from './profile.actions';
import {Tour} from '../../tours/models/tour.model';


export interface State {
  profileMode: string;
  userGuideInfo: Guide;
  userVisitorInfo: Visitor;
}

const initialState: State = {
  profileMode: '',
  userGuideInfo: null,
  userVisitorInfo: null,
};

const setProfileMode = (state: State, profileMode: string) => ({...state, profileMode});

const clearUserInfo = (state: State) => ({
  ...state,
  profileMode: '',
  userGuideInfo: null,
  userVisitorInfo: null,
});

const setUserVisitorInfo = (state: State, user: Visitor) => ({...state, userVisitorInfo: {...user}});

const setUserGuideInfo = (state: State, user: Guide) => ({...state, userGuideInfo: {...user}});

const deleteFavouriteTour = (state: State, tourId: Tour['tourId']) => ({
  ...state,
  userVisitorInfo: {
    ...state.userVisitorInfo,
    tourEntitySet: state.userVisitorInfo.tourEntitySet.filter((tour: Tour) => tour.tourId !== tourId)
  }
});

export function profileReducer(state: State = initialState, action: ProfileActions) {
  switch (action.type) {
    case SET_PROFILE_MODE: {
      return setProfileMode(state, action.payload);
    }
    case CLEAR_USER_INFO: {
      return clearUserInfo(state);
    }
    case FETCH_VISITOR_INFO_SUCCESS: {
      return setUserVisitorInfo(state, action.payload);
    }
    case FETCH_GUIDE_INFO_SUCCESS: {
      return setUserGuideInfo(state, action.payload);
    }
    case DELETE_FAVOURITE_TOUR_SUCCESS: {
      return deleteFavouriteTour(state, action.payload);
    }
    default:
      return state;
  }
}
