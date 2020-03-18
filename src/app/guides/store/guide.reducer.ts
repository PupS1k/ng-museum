import {
  GuideActions,
  CLEAR_SELECTED_GUIDE,
  CREATE_GUIDE_SUCCESS,
  DELETE_GUIDE_SUCCESS,
  FETCH_GUIDE_SUCCESS,
  FETCH_GUIDES_SUCCESS,
  UPDATE_GUIDE_SUCCESS
} from './guide.actions';
import {Guide} from '../models/guide.model';


export interface State {
  selectedGuide: Guide;
  guides: Guide[];
}

const initialState: State = {
  selectedGuide: null,
  guides: [],
};

const setGuides = (state: State, guides: Guide[]) => ({...state, guides: [...guides]});

const setGuide = (state: State, guide: Guide) => ({...state, selectedGuide: {...guide}});

const updateGuide = (state: State, updatedGuide) => ({
  ...state,
  guides: state.guides.map(guide => guide.guideId === updatedGuide.guideId ? updatedGuide : guide)
});

const deleteGuide = (state: State, guideId: Guide['guideId']) => ({
  ...state,
  guides: state.guides.filter(guide => guide.guideId !== guideId)
});

const createGuide = (state: State, guide: Guide) => ({...state, guides: [...state.guides, guide]});

const clearSelectedGuide = (state: State) => ({...state, selectedGuide: null});

export function guideReducer(state: State = initialState, action: GuideActions) {
  switch (action.type) {
    case FETCH_GUIDES_SUCCESS:
      return setGuides(state, action.payload);
    case FETCH_GUIDE_SUCCESS:
      return setGuide(state, action.payload);
    case UPDATE_GUIDE_SUCCESS:
      return updateGuide(state, action.payload);
    case DELETE_GUIDE_SUCCESS: {
      return deleteGuide(state, action.payload);
    }
    case CREATE_GUIDE_SUCCESS: {
      return createGuide(state, action.payload);
    }
    case CLEAR_SELECTED_GUIDE: {
      return clearSelectedGuide(state);
    }
    default:
      return state;
  }
}
