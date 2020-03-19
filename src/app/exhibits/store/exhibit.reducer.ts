import {Exhibit} from '../models/exhibit.model';
import {
  CLEAR_SELECTED_EXHIBIT,
  DELETE_EXHIBIT_FROM_TOUR_SUCCESS,
  ExhibitActions,
  FETCH_EXHIBIT_SUCCESS,
  FETCH_EXHIBITS_SUCCESS,
  UPDATE_EXHIBIT_SUCCESS
} from './exhibit.actions';
import {Tour} from '../../tours/models/tour.model';


export interface State {
  selectedExhibit: Exhibit;
  exhibits: Exhibit[];
}

const initialState: State = {
  selectedExhibit: null,
  exhibits: [],
};

const deleteExhibitFromTour = (state: State, tourId: Tour['tourId']) => ({
  ...state,
  selectedExhibit: {
    ...state.selectedExhibit,
    tourEntitySet: state.selectedExhibit.tourEntitySet.filter((tour: Tour) => tour.tourId !== tourId)
  }
});

const setExhibits = (state: State, exhibits: Exhibit[]) => ({...state, exhibits: [...exhibits]});

const setExhibit = (state: State, exhibit: Exhibit) => ({...state, selectedExhibit: {...exhibit}});

const clearSelectedExhibit = (state: State) => ({...state, selectedExhibit: null});

const updateExhibit = (state: State, updatedExhibit: Exhibit) => ({
  ...state,
  exhibits: state.exhibits.map(exhibit => exhibit.exhibitId === updatedExhibit.exhibitId ? updatedExhibit : exhibit),
  selectedTour: null
});

export function exhibitReducer(state: State = initialState, action: ExhibitActions) {
  switch (action.type) {
    case DELETE_EXHIBIT_FROM_TOUR_SUCCESS: {
      return deleteExhibitFromTour(state, action.payload);
    }
    case CLEAR_SELECTED_EXHIBIT: {
      return clearSelectedExhibit(state);
    }
    case FETCH_EXHIBITS_SUCCESS:
      return setExhibits(state, action.payload);
    case FETCH_EXHIBIT_SUCCESS:
      return setExhibit(state, action.payload);
    case UPDATE_EXHIBIT_SUCCESS:
      return updateExhibit(state, action.payload);
    default:
      return state;
  }
}
