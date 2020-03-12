import {CATCH_MESSAGE_ALERT, CLOSE_MESSAGE_ALERT, HIDE_SPINNER, SHOW_SPINNER, LayoutActions} from './layout.actions';

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
    case CATCH_MESSAGE_ALERT: {
      return {
        ...state,
        message: `${action.payload.module}: ${action.payload.message}`,
        isLoading: false
      };
    }
    case CLOSE_MESSAGE_ALERT: {
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
