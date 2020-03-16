import {
  AuthActions,
  AUTO_LOGIN_SUCCESS,
  CHANGE_USERNAME,
  FETCH_ROLE,
  LOGIN_SUCCESS,
  LOGOUT
} from './auth.actions';


export interface State {
  name: string;
  token: string;
  isAdmin: boolean;
  isGuide: boolean;
  isVisitor: boolean;
}

const initialState: State =  {
  name: '',
  token: '',
  isAdmin: false,
  isGuide: false,
  isVisitor: false
};


export function authReducer(state: State = initialState, action: AuthActions) {
  switch (action.type) {
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
        isVisitor: action.payload.isVisitor
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
