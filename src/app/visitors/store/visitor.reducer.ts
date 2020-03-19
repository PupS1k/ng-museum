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

const setVisitors = (state: State, visitors: Visitor[]) => ({...state, visitors: [...visitors]});

const setVisitor = (state: State, visitor: Visitor) => ({...state, selectedVisitor: {...visitor}});

const updateVisitor = (state: State, updatedVisitor: Visitor) => ({
  ...state,
  visitors: state.visitors.map(visitor => visitor.visitorId === updatedVisitor.visitorId ? updatedVisitor : visitor)
});

const deleteVisitor = (state: State, visitorId: Visitor['visitorId']) => ({
  ...state,
  visitors: state.visitors.filter(visitor => visitor.visitorId !== visitorId)
});

const createVisitor = (state: State, visitor: Visitor) => ({
  ...state,
  visitors: [...state.visitors, visitor]
});

const clearSelectedVisitor = (state: State) => ({...state, selectedVisitor: null});


export function visitorReducer(state: State = initialState, action: VisitorActions) {
  switch (action.type) {
    case FETCH_VISITORS_SUCCESS:
      return setVisitors(state, action.payload);
    case FETCH_VISITOR_SUCCESS:
      return setVisitor(state, action.payload);
    case UPDATE_VISITOR_SUCCESS:
      return updateVisitor(state, action.payload);
    case DELETE_VISITOR_SUCCESS: {
      return deleteVisitor(state, action.payload);
    }
    case CLEAR_SELECTED_VISITOR: {
      return clearSelectedVisitor(state);
    }
    case CREATE_VISITOR_SUCCESS: {
      return createVisitor(state, action.payload);
    }
    default:
      return state;
  }
}
