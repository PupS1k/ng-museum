import {
  AuthActions,
  AUTO_LOGIN_SUCCESS,
  CHANGE_USERNAME,
  FETCH_ROLE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGN_UP_START
} from './auth.actions';


export interface State {
  name: string;
  token: string;
  isAdmin: boolean;
  isGuide: boolean;
  isVisitor: boolean;
  isLoading: boolean;
}

const initialState: State =  {
  name: '',
  token: '',
  isAdmin: false,
  isGuide: false,
  isVisitor: false,
  isLoading: false
};


export function authReducer(state: State = initialState, action: AuthActions) {
  switch (action.type) {
    case SIGN_UP_START:
    case LOGIN_START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case AUTO_LOGIN_SUCCESS: {
      return {
        ...state,
        name: action.payload.name,
        token: action.payload.token,
        isAdmin: action.payload.isAdmin,
        isGuide: action.payload.isGuide,
        isVisitor: action.payload.isVisitor
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        name: action.payload.name,
        token: action.payload.token
      };
    }
    case FETCH_ROLE: {
      return {
        ...state,
        isAdmin: action.payload.isAdmin,
        isGuide: action.payload.isGuide,
        isVisitor: action.payload.isVisitor,
        isLoading: false
      };
    }
    case CHANGE_USERNAME: {
      return {
        ...state,
        name: action.payload
      };
    }
    case LOGOUT: {
      return {
        ...state,
        name: '',
        token: '',
        isAdmin: false,
        isGuide: false,
        isVisitor: false
      };
    }
    default: {
      return state;
    }
  }
}
