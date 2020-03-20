import {Action} from '@ngrx/store';
import {LoginForm} from '../models/login-form.model';
import {VisitorForm} from '../../visitors/models/visitor-form.model';

export const LOGIN_START = '[Auth] Login Start';
export const SIGN_UP_START = '[Auth] Sign Up Start';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const SIGN_UP_SUCCESS = '[Auth] Sign Up Success';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const UPDATE_TOKEN_EXP_DATE = '[Auth] Update Token Expiration Date';
export const CHANGE_USERNAME = '[Auth] Change Username';
export const LOGOUT = '[Auth] Logout';
export const SET_ROLE = '[Auth] Set Role';

export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(public payload: LoginForm) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: {username: string, token: string, tokenExpirationDate: Date}) {}
}

export class SignUpStart implements Action {
  readonly type = SIGN_UP_START;
  constructor(public payload: VisitorForm) {}
}

export class SignUpSuccess implements Action {
  readonly type = SIGN_UP_SUCCESS;
  constructor(public payload: LoginForm) {}
}

export class UpdateTokenExpDate implements Action {
  readonly type = UPDATE_TOKEN_EXP_DATE;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export class ChangeUsername implements Action {
  readonly type = CHANGE_USERNAME;
  constructor(public payload: string) {}
}

export class SetRole implements Action {
  readonly type = SET_ROLE;
  constructor(public payload: string[]) {}
}

export type AuthActions =
  | ChangeUsername
  | SetRole
  | Logout
  | LoginSuccess
  | UpdateTokenExpDate;
