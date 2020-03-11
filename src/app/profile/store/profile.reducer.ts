import {Visitor} from '../../visitors/models/visitor.model';
import {Guide} from '../../guides/models/guide.model';
import {CLEAR_USER_INFO, FETCH_GUIDE_INFO_SUCCESS, FETCH_VISITOR_INFO_SUCCESS, ProfileActions, SET_PROFILE_MODE} from './profile.actions';


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

export function profileReducer(state: State = initialState, action: ProfileActions) {
  switch (action.type) {
    case SET_PROFILE_MODE: {
      return {
        ...state,
        profileMode: action.payload
      };
    }
    case CLEAR_USER_INFO: {
      return {
        ...state,
        profileMode: '',
        userGuideInfo: null,
        userVisitorInfo: null,
      };
    }
    case FETCH_VISITOR_INFO_SUCCESS: {
      return {
        ...state,
        userVisitorInfo: {...action.payload}
      };
    }
    case FETCH_GUIDE_INFO_SUCCESS: {
      return {
        ...state,
        userGuideInfo: {...action.payload}
      };
    }
    default:
      return state;
  }
}
