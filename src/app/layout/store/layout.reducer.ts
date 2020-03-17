import {SHOW_MESSAGE, HIDE_MESSAGE, HIDE_SPINNER, SHOW_SPINNER, LayoutActions} from './layout.actions';

export interface State {
  isLoading: boolean;
  message: string;
}

const initialState: State = {
  isLoading: false,
  message: ''
};

export function layoutReducer(state: State = initialState, action: LayoutActions) {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        isLoading: true
      };
    }
    case HIDE_SPINNER: {
      return {
        ...state,
        isLoading: false
      };
    }
    case SHOW_MESSAGE: {
      return {
        ...state,
        message: `${action.payload.module}: ${action.payload.message}`,
        isLoading: false
      };
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        message: '',
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
}
