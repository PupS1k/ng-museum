import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {catchError, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {Action, Store} from '@ngrx/store';

import {
  FETCH_ROLE,
  LOGIN_START, LOGIN_SUCCESS,
  LoginStart,
  LOGOUT,
  SIGN_UP_START, SIGN_UP_SUCCESS,
  SignUpStart,
  SignUpSuccess, UPDATE_TOKEN_EXP_DATE
} from './auth.actions';
import {AuthService} from '../../core/services/auth.service';
import {ShowMessage} from '../../layout/store/layout.actions';
import {handleError} from '../../layout/utils';
import {ApiAuthService} from '../../core/services/api-auth.service';
import {AppState} from '../../app.reducer';
import {selectAuthState} from './auth.selectors';
import {UserData} from '../../core/models/user-data.model';


@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private apiAuthService: ApiAuthService,
    private router: Router,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  @Effect()
  login = this.actions$.pipe(
    ofType<LoginStart>(LOGIN_START),
    map(action => action.payload),
    switchMap(({username, password}) => this.apiAuthService.login(username, password)
      .pipe(
        map(responseData => this.authService.handleLogin(responseData, username)),
        catchError(err => of(new ShowMessage({module: 'Auth', message: handleError(err)})))
      )
    )
  );

  @Effect()
  signUp = this.actions$.pipe(
    ofType<SignUpStart>(SIGN_UP_START),
    map(action => action.payload),
    switchMap(signUpFormData => this.apiAuthService.signUp(signUpFormData)
      .pipe(
        map((responseData) => this.authService.handleSignUp(responseData)),
        catchError(err => of(new ShowMessage({module: 'Auth', message: handleError(err)})))
      )
    )
  );

  @Effect()
  authLoginAfterSignUp = this.actions$.pipe(
    ofType<SignUpSuccess>(SIGN_UP_SUCCESS),
    map(action => action.payload),
    map(({username, password}) => new LoginStart({username, password}))
  );

  @Effect()
  fetchRoles = this.actions$.pipe(
    ofType(LOGIN_SUCCESS),
    withLatestFrom(this.store.select(selectAuthState)),
    switchMap(([action, authState]: [Action, UserData]) => this.apiAuthService.fetchRoles()
      .pipe(
        map((responseData) => this.authService.setRoles(responseData, authState)),
        catchError(err => of(new ShowMessage({module: 'Auth', message: handleError(err)})))
      )
    )
  );

  @Effect()
  autoLogin = this.actions$.pipe(
    ofType(UPDATE_TOKEN_EXP_DATE),
    withLatestFrom(this.store.select(selectAuthState)),
    map(([action, authState]: [Action, UserData]) => this.authService.updateLogoutTimer(authState))
  );

  @Effect({dispatch: false})
  logout = this.actions$.pipe(
    ofType(LOGOUT),
    tap(() => this.authService.logout())
  );

  @Effect({dispatch: false})
  authLoginRedirect = this.actions$.pipe(
    ofType(FETCH_ROLE),
    tap(() => this.router.navigate(['/']))
  );

}
