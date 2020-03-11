import {
  ADD_FAVOURITE_TOUR_SUCCESS,
  CHECK_FAVOURITE_TOUR_SUCCESS,
  CLEAR_SELECTED_TOUR,
  DELETE_FAVOURITE_TOUR_SUCCESS,
  FETCH_EXHIBITS_TOUR_SUCCESS,
  FETCH_TOUR_START,
  FETCH_TOUR_SUCCESS,
  FETCH_TOURS_START,
  FETCH_TOURS_SUCCESS,
  TourActions,
  UPDATE_TOUR_FAIL,
  UPDATE_TOUR_START,
  UPDATE_TOUR_SUCCESS,
} from './tour.actions';
import {Tour} from '../models/tour.model';
import {Exhibit} from '../../exhibits/models/exhibit.model';


export interface State {
  selectedTour: Tour;
  exhibitsOfTour: Exhibit[];
  isFavouriteTour: boolean;
  tours: Tour[];
  isLoading: boolean;
}

const initialState: State = {
  selectedTour: null,
  exhibitsOfTour: [],
  isFavouriteTour: false,
  isLoading: false,
  tours: [],
};

export function tourReducer(state: State = initialState, action: TourActions) {
  switch (action.type) {
    case CLEAR_SELECTED_TOUR: {
      return {
        ...state,
        exhibitsOfTour: [],
        selectedTour: null,
        isFavouriteTour: false
      };
    }
    case DELETE_FAVOURITE_TOUR_SUCCESS: {
      return {
        ...state,
        isFavouriteTour: false
      };
    }
    case ADD_FAVOURITE_TOUR_SUCCESS: {
      return {
        ...state,
        isFavouriteTour: true
      };
    }
    case FETCH_EXHIBITS_TOUR_SUCCESS: {
      return {
        ...state,
        exhibitsOfTour: [...action.payload]
      };
    }
    case CHECK_FAVOURITE_TOUR_SUCCESS: {
      return {
        ...state,
        isFavouriteTour: action.payload
      };
    }
    case FETCH_TOURS_SUCCESS:
      return {
        ...state,
        tours: [...action.payload],
        isLoading: false
      };
    case FETCH_TOUR_SUCCESS:
      return {
        ...state,
        selectedTour: {...action.payload},
        isLoading: false
      };
    case UPDATE_TOUR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tours: state.tours.map(tour => tour.tourId === action.payload.tourId ? action.payload : tour)
      };
    case UPDATE_TOUR_FAIL:
      return {
        ...state,
        isLoading: false
      };
    case UPDATE_TOUR_START:
    case FETCH_TOUR_START:
    case FETCH_TOURS_START:
      return {
        ...state,
        isLoading: true,
        errorMessage: ''
      };
    default:
      return state;
  }
}
