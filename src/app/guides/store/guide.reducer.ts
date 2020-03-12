import {
  CLEAR_SELECTED_GUIDE,
  CREATE_GUIDE_SUCCESS,
  DELETE_GUIDE_SUCCESS,
  FETCH_GUIDE_START,
  FETCH_GUIDE_SUCCESS,
  FETCH_GUIDES_START,
  FETCH_GUIDES_SUCCESS,
  GuideActions,
  UPDATE_GUIDE_START,
  UPDATE_GUIDE_SUCCESS
} from './guide.actions';
import {Guide} from '../models/guide.model';


export interface State {
  selectedGuide: Guide;
  guides: Guide[];
  isLoading: boolean;
  errorMessage: string;
}

const initialState: State = {
  selectedGuide: null,
  guides: [],
  isLoading: false,
  errorMessage: ''
};

export function guideReducer(state: State = initialState, action: GuideActions) {
  switch (action.type) {
    case FETCH_GUIDES_SUCCESS:
      return {
        ...state,
        guides: [...action.payload],
        isLoading: false
      };
    case FETCH_GUIDE_SUCCESS:
      return {
        ...state,
        selectedGuide: {...action.payload},
        isLoading: false
      };
    case UPDATE_GUIDE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        guides: state.guides.map(guide => guide.guideId === action.payload.guideId ? action.payload : guide)
      };
    case DELETE_GUIDE_SUCCESS: {
      return {
        ...state,
        guides: state.guides.filter(guide => guide.guideId !== action.payload)
      };
    }
    case CLEAR_SELECTED_GUIDE: {
      return {
        ...state,
        selectedGuide: null
      };
    }
    case CREATE_GUIDE_SUCCESS: {
      return {
        ...state,
        guides: [...state.guides, action.payload]
      };
    }
    case UPDATE_GUIDE_START:
    case FETCH_GUIDE_START:
    case FETCH_GUIDES_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: ''
      };
    default:
      return state;
  }
}
