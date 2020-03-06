import {Exhibit} from '../models/exhibit.model';
import {
  CLOSE_ERROR_ALERT,
  ExhibitActions,
  FETCH_EXHIBIT_START,
  FETCH_EXHIBIT_SUCCESS,
  FETCH_EXHIBITS_START,
  FETCH_EXHIBITS_SUCCESS,
  UPDATE_EXHIBIT_FAIL,
  UPDATE_EXHIBIT_START,
  UPDATE_EXHIBIT_SUCCESS
} from './exhibit.actions';


export interface State {
  selectedExhibit: Exhibit;
  exhibits: Exhibit[];
  loading: boolean;
  errorMessage: string;
}

const initialState: State = {
  selectedExhibit: null,
  loading: false,
  exhibits: [],
  errorMessage: ''
};

export function exhibitReducer(state: State = initialState, action: ExhibitActions) {
  switch (action.type) {
    case FETCH_EXHIBITS_SUCCESS:
      return {
        ...state,
        exhibits: [...action.payload],
        loading: false
      };
    case FETCH_EXHIBIT_SUCCESS:
      return {
        ...state,
        selectedExhibit: {...action.payload},
        loading: false
      };
    case UPDATE_EXHIBIT_SUCCESS:
      return {
        ...state,
        loading: false,
        exhibits: state.exhibits.map(exhibit => exhibit.exhibitId === action.payload.exhibitId ? action.payload : exhibit)
      };
    case UPDATE_EXHIBIT_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false
      };
    case UPDATE_EXHIBIT_START:
    case FETCH_EXHIBIT_START:
    case FETCH_EXHIBITS_START:
      return {
        ...state,
        loading: true,
        errorMessage: ''
      };
    case CLOSE_ERROR_ALERT:
      return {
        ...state,
        errorMessage: ''
      };
    default:
      return state;
  }
}
