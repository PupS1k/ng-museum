import {
  CHECK_FAVOURITE_TOUR_SUCCESS,
  CLEAR_SELECTED_TOUR,
  DELETE_EXHIBIT_TOUR_SUCCESS,
  DELETE_GUIDE_TOUR_SUCCESS,
  DELETE_VISITOR_TOUR_SUCCESS,
  FETCH_EXHIBITS_TOUR_SUCCESS,
  FETCH_GUIDE_TOUR_SUCCESS,
  FETCH_TOUR_SUCCESS,
  FETCH_TOURS_SUCCESS,
  FETCH_VISITORS_TOUR_SUCCESS,
  TOGGLE_FAVOURITE_TOUR,
  TourActions,
  UPDATE_TOUR_SUCCESS,
} from './tour.actions';
import {Tour} from '../models/tour.model';
import {Exhibit} from '../../exhibits/models/exhibit.model';
import {Guide} from '../../guides/models/guide.model';
import {Visitor} from '../../visitors/models/visitor.model';


export interface State {
  selectedTour: Tour;
  tourExhibits: Exhibit[];
  tourGuide: Guide;
  tourVisitors: Visitor[];
  isFavouriteTour: boolean;
  tours: Tour[];
}

const initialState: State = {
  selectedTour: null,
  tourExhibits: [],
  tourGuide: null,
  tourVisitors: [],
  isFavouriteTour: false,
  tours: [],
};

const clearGuide = (state: State) => ({...state, tourGuide: null});

const deleteVisitor = (state: State, visitorId: Visitor['visitorId']) => ({
  ...state,
  tourVisitors: state.tourVisitors.filter((visitor: Visitor) => visitor.visitorId !== visitorId)
});

const deleteExhibit = (state: State, exhibitId: Exhibit['exhibitId']) => ({
  ...state,
  tourExhibits: state.tourExhibits.filter((exhibit: Exhibit) => exhibit.exhibitId !== exhibitId)
});

const clearSelectedTour = (state: State) => ({
  ...state,
  tourExhibits: [],
  selectedTour: null,
  isFavouriteTour: false,
  tourGuide: null,
  tourVisitors: []
});

const toggleIsFavouriteTour = (state: State) => ({
  ...state,
  isFavouriteTour: !state.isFavouriteTour
});

const setExhibitsTour = (state: State, exhibits: Exhibit[]) => ({...state, tourExhibits: [...exhibits]});

const setVisitorsTour = (state: State, visitors: Visitor[]) => ({...state, tourVisitors: [...visitors]});

const setGuideTour = (state: State, guide: Guide) => ({...state, tourGuide: {...guide}});

const setIsFavouriteTour = (state: State, isFavouriteTour: boolean) => ({...state, isFavouriteTour});

const setTours = (state: State, tours: Tour[]) => ({...state, tours: [...tours]});

const setTour = (state: State, tour: Tour) => ({...state, selectedTour: {...tour}});

const updateTour = (state: State, updatedTour: Tour) => ({
  ...state,
  tours: state.tours.map(tour => tour.tourId === updatedTour.tourId ? updatedTour : tour),
  selectedTour: null
});

export function tourReducer(state: State = initialState, action: TourActions) {
  switch (action.type) {
    case DELETE_GUIDE_TOUR_SUCCESS: {
      return clearGuide(state);
    }
    case DELETE_VISITOR_TOUR_SUCCESS: {
      return deleteVisitor(state, action.payload);
    }
    case DELETE_EXHIBIT_TOUR_SUCCESS: {
      return deleteExhibit(state, action.payload);
    }
    case CLEAR_SELECTED_TOUR: {
      return clearSelectedTour(state);
    }
    case TOGGLE_FAVOURITE_TOUR: {
      return toggleIsFavouriteTour(state);
    }
    case FETCH_EXHIBITS_TOUR_SUCCESS: {
      return setExhibitsTour(state, action.payload);
    }
    case FETCH_VISITORS_TOUR_SUCCESS: {
      return setVisitorsTour(state, action.payload);
    }
    case FETCH_GUIDE_TOUR_SUCCESS: {
      return setGuideTour(state, action.payload);
    }
    case CHECK_FAVOURITE_TOUR_SUCCESS: {
      return setIsFavouriteTour(state, action.payload);
    }
    case FETCH_TOURS_SUCCESS:
      return setTours(state, action.payload);
    case FETCH_TOUR_SUCCESS:
      return setTour(state, action.payload);
    case UPDATE_TOUR_SUCCESS:
      return updateTour(state, action.payload);
    default:
      return state;
  }
}
