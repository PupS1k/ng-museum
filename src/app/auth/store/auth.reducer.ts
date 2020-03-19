import {
  AuthActions,
  UPDATE_TOKEN_EXP_DATE,
  CHANGE_USERNAME,
  FETCH_ROLE,
  LOGIN_SUCCESS,
  LOGOUT
} from './auth.actions';
import {UserData} from '../../core/models/user-data.model';
import * as moment from 'moment';
import {now} from 'moment';


const initialState: UserData = JSON.parse(localStorage.getItem('userData')) || {
  username: '',
  token: '',
  roles: [],
  tokenExpirationDate: null
};

const setTokenExpirationDate = (state: UserData) => ({
  ...state,
  tokenExpirationDate: moment(state.tokenExpirationDate).subtract(now())
});

const setUserData = (state: UserData, {username, token, tokenExpirationDate}) => ({
  ...state,
  username,
  token,
  tokenExpirationDate
});

const setRoles = (state: UserData, roles: string[]) => ({...state, roles});

const setUsername = (state: UserData, username: string) => ({...state, username});

const clearAuthState = (state: UserData) => ({
  ...state,
  username: '',
  token: '',
  roles: [],
  tokenExpirationDate: null
});

export function authReducer(state: UserData = initialState, action: AuthActions) {
  switch (action.type) {
    case UPDATE_TOKEN_EXP_DATE: {
      return setTokenExpirationDate(state);
    }
    case LOGIN_SUCCESS: {
      return setUserData(state, action.payload);
    }
    case FETCH_ROLE: {
      return setRoles(state, action.payload);
    }
    case CHANGE_USERNAME: {
      return setUsername(state, action.payload);
    }
    case LOGOUT: {
      return clearAuthState(state);
    }
    default: {
      return state;
    }
  }
}
