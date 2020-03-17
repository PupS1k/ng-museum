import {Exhibit} from '../models/exhibit.model';
import {
  DELETE_EXHIBIT_FROM_TOUR_SUCCESS,
  ExhibitActions,
  FETCH_EXHIBIT_START,
  FETCH_EXHIBIT_SUCCESS,
  FETCH_EXHIBITS_START,
  FETCH_EXHIBITS_SUCCESS,
  UPDATE_EXHIBIT_START,
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

export function exhibitReducer(state: State = initialState, action: ExhibitActions) {
  switch (action.type) {
    case DELETE_EXHIBIT_FROM_TOUR_SUCCESS: {
      return {
        ...state,
        selectedExhibit: {
          ...state.selectedExhibit,
          tourEntitySet: state.selectedExhibit.tourEntitySet.filter((tour: Tour) => tour.tourId !== action.payload)
        }
      };
    }
    case FETCH_EXHIBITS_SUCCESS:
      return {
        ...state,
        exhibits: [...action.payload]
      };
    case FETCH_EXHIBIT_SUCCESS:
      return {
        ...state,
        selectedExhibit: {...action.payload}
      };
    case UPDATE_EXHIBIT_SUCCESS:
      return {
        ...state,
        exhibits: state.exhibits.map(exhibit => exhibit.exhibitId === action.payload.exhibitId ? action.payload : exhibit)
      };
    case UPDATE_EXHIBIT_START:
    case FETCH_EXHIBIT_START:
    case FETCH_EXHIBITS_START:
      return {
        ...state,
        errorMessage: ''
      };
    default:
      return state;
  }
}
