import {Action} from '@ngrx/store';


export const LOGIN_START = '[Auth] Login Start';
export const SIGN_UP_START = '[Auth] Sign Up Start';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const SIGN_UP_SUCCESS = '[Auth] Sign Up Success';
export const AUTO_LOGIN_START = '[Auth] Auto Login Start';
export const AUTO_LOGIN_SUCCESS = '[Auth] Auto Login Success';
export const CHANGE_USERNAME = '[Auth] Change Username';
export const LOGOUT = '[Auth] Logout';
export const FETCH_ROLE = '[Auth] Fetch Role';

export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(public payload: {username: string, password: string}) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: {name: string, token: string}) {}
}

export class SignUpStart implements Action {
  readonly type = SIGN_UP_START;
  constructor(public payload: {username: string, password: string, age: number, fio: string, email: string}) {}
}

export class SignUpSuccess implements Action {
  readonly type = SIGN_UP_SUCCESS;
  constructor(public payload: {username: string, password: string}) {}
}

export class AutoLoginStart implements Action {
  readonly type = AUTO_LOGIN_START;
}

export class AutoLoginSuccess implements Action {
  readonly type = AUTO_LOGIN_SUCCESS;
  constructor(public payload: {name: string, token: string, isAdmin: boolean, isGuide: boolean, isVisitor: boolean}) {
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class ChangeUsername implements Action {
  readonly type = CHANGE_USERNAME;
  constructor(public payload: string) {}
}

export class FetchRole implements Action {
  readonly type = FETCH_ROLE;
  constructor(public payload: {isAdmin: boolean, isGuide: boolean, isVisitor: boolean}) {}
}

export type AuthActions =
  | AutoLoginSuccess
  | ChangeUsername
  | FetchRole
  | Logout
  | LoginSuccess;
