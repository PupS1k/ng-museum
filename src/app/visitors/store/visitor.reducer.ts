import {
  CLEAR_SELECTED_VISITOR, CREATE_VISITOR_SUCCESS,
  DELETE_VISITOR_SUCCESS, FETCH_VISITOR_START,
  FETCH_VISITOR_SUCCESS, FETCH_VISITORS_START,
  FETCH_VISITORS_SUCCESS, UPDATE_VISITOR_FAIL, UPDATE_VISITOR_START, UPDATE_VISITOR_SUCCESS,
  VisitorActions
} from './visitor.actions';
import {Visitor} from '../models/visitor.model';


export interface State {
  selectedVisitor: Visitor;
  visitors: Visitor[];
  isLoading: boolean;
}

const initialState: State = {
  selectedVisitor: null,
  visitors: [],
  isLoading: false
};

export function visitorReducer(state: State = initialState, action: VisitorActions) {
  switch (action.type) {
    case FETCH_VISITORS_SUCCESS:
      return {
        ...state,
        visitors: [...action.payload],
        isLoading: false
      };
    case FETCH_VISITOR_SUCCESS:
      return {
        ...state,
        selectedVisitor: {...action.payload},
        isLoading: false
      };
    case UPDATE_VISITOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        visitors: state.visitors.map(visitor => visitor.visitorId === action.payload.visitorId ? action.payload : visitor)
      };
    case UPDATE_VISITOR_FAIL:
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false
      };
    case DELETE_VISITOR_SUCCESS: {
      return {
        ...state,
        visitors: state.visitors.filter(visitor => visitor.visitorId !== action.payload)
      };
    }
    case CLEAR_SELECTED_VISITOR: {
      return {
        ...state,
        selectedVisitor: null
      };
    }
    case CREATE_VISITOR_SUCCESS: {
      return {
        ...state,
        guides: [...state.visitors, action.payload]
      };
    }
    case UPDATE_VISITOR_START:
    case FETCH_VISITOR_START:
    case FETCH_VISITORS_START:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
