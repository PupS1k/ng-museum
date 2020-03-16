import {
  CLEAR_SELECTED_VISITOR, CREATE_VISITOR_SUCCESS,
  DELETE_VISITOR_SUCCESS,
  FETCH_VISITOR_SUCCESS,
  FETCH_VISITORS_SUCCESS, UPDATE_VISITOR_SUCCESS,
  VisitorActions
} from './visitor.actions';
import {Visitor} from '../models/visitor.model';


export interface State {
  selectedVisitor: Visitor;
  visitors: Visitor[];
}

const initialState: State = {
  selectedVisitor: null,
  visitors: []
};

export function visitorReducer(state: State = initialState, action: VisitorActions) {
  switch (action.type) {
    case FETCH_VISITORS_SUCCESS:
      return {
        ...state,
        visitors: [...action.payload]
      };
    case FETCH_VISITOR_SUCCESS:
      return {
        ...state,
        selectedVisitor: {...action.payload}
      };
    case UPDATE_VISITOR_SUCCESS:
      return {
        ...state,
        visitors: state.visitors.map(visitor => visitor.visitorId === action.payload.visitorId ? action.payload : visitor)
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
    default:
      return state;
  }
}
