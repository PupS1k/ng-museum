import {
  ADD_FAVOURITE_TOUR_SUCCESS,
  CHECK_FAVOURITE_TOUR_SUCCESS,
  CLEAR_SELECTED_TOUR,
  DELETE_FAVOURITE_TOUR_SUCCESS,
  FETCH_EXHIBITS_TOUR_SUCCESS, FETCH_GUIDE_TOUR_SUCCESS,
  FETCH_TOUR_SUCCESS,
  FETCH_TOURS_SUCCESS, FETCH_VISITORS_TOUR_SUCCESS,
  TourActions,
  UPDATE_TOUR_SUCCESS,
} from './tour.actions';
import {Tour} from '../models/tour.model';
import {Exhibit} from '../../exhibits/models/exhibit.model';
import {Guide} from '../../guides/models/guide.model';
import {Visitor} from '../../visitors/models/visitor.model';


export interface State {
  selectedTour: Tour;
  exhibitsOfTour: Exhibit[];
  tourGuide: Guide;
  tourVisitors: Visitor[];
  isFavouriteTour: boolean;
  tours: Tour[];
}

const initialState: State = {
  selectedTour: null,
  exhibitsOfTour: [],
  tourGuide: null,
  tourVisitors: [],
  isFavouriteTour: false,
  tours: [],
};

export function tourReducer(state: State = initialState, action: TourActions) {
  switch (action.type) {
    case CLEAR_SELECTED_TOUR: {
      return {
        ...state,
        exhibitsOfTour: [],
        selectedTour: null,
        isFavouriteTour: false,
        tourGuide: null,
        tourVisitors: []
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
    case FETCH_VISITORS_TOUR_SUCCESS: {
      return {
        ...state,
        tourVisitors: [...action.payload]
      };
    }
    case FETCH_GUIDE_TOUR_SUCCESS: {
      return {
        ...state,
        tourGuide: {...action.payload}
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
        tours: [...action.payload]
      };
    case FETCH_TOUR_SUCCESS:
      return {
        ...state,
        selectedTour: {...action.payload}
      };
    case UPDATE_TOUR_SUCCESS:
      return {
        ...state,
        tours: state.tours.map(tour => tour.tourId === action.payload.tourId ? action.payload : tour)
      };
    default:
      return state;
  }
}
