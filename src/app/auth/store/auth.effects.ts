import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError, map, switchMap, tap} from 'rxjs/operators';

import {
  AUTO_LOGIN_START, AutoLoginSuccess, FETCH_ROLE, FetchRole,
  LOGIN_START, LOGIN_SUCCESS,
  LoginStart,
  LoginSuccess,
  LOGOUT,
  SIGN_UP_START, SIGN_UP_SUCCESS,
  SignUpStart,
  SignUpSuccess
} from './auth.actions';
import {AuthService} from '../../core/services/auth.service';
import {of} from 'rxjs';
import {UpdateExhibitFail} from '../../exhibits/store/exhibit.actions';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {UserData} from '../models/user-data.model';
import {Visitor} from '../../visitors/models/visitor.model';


export interface LoginResponseData {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  jti: string;
}

export interface WhoiamResData {
  authority: string;
}


@Injectable()
export class AuthEffects {
  @Effect()
  login = this.actions$.pipe(
    ofType(LOGIN_START),
    switchMap((loginAction: LoginStart) => {
      let body = new HttpParams();
      body = body.set('username', loginAction.payload.username);
      body = body.set('password', loginAction.payload.password);
      body = body.set('grant_type', 'password');

      return this.http.post<LoginResponseData>(
        'oauth/token',
        body,
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa('Client' + ':' + 'Secret'),
          })
        })
        .pipe(
          map(resData => {
            this.authService.setLogoutTimer(+resData.expires_in * 1000);
            const expirationDate = new Date(new Date().getTime() + +resData.expires_in * 1000);
            localStorage.setItem(
              'userData',
              JSON.stringify({
                name: loginAction.payload.username,
                token: resData.access_token,
                tokenExpirationDate: expirationDate
              }));

            return new LoginSuccess({name: loginAction.payload.username, token: resData.access_token});
          }),
          catchError(this.handleError)
        );
    })
  );

  @Effect()
  fetchRole = this.actions$.pipe(
    ofType(LOGIN_SUCCESS),
    switchMap(() => this.http.get<WhoiamResData[]>('/abo/whoiam')
      .pipe(
        map((resData) => {
          const userData: UserData = JSON.parse(localStorage.getItem('userData'));
          const roles = resData.map((role: WhoiamResData) => role.authority);

          const isAdmin = roles.includes('ROLE_ADMIN');
          const isGuide = roles.includes('ROLE_GUIDE');
          const isVisitor = roles.includes('ROLE_VISITOR');

          localStorage.setItem('userData', JSON.stringify({...userData, roles}));

          return new FetchRole({isAdmin, isGuide, isVisitor});
        }),
        catchError(this.handleError)
      )
    )
  );

  @Effect()
  autoLogin = this.actions$.pipe(
    ofType(AUTO_LOGIN_START),
    map(() => {
      const userData: UserData = JSON.parse(localStorage.getItem('userData'));

      if (!userData) {
        return {type: '[Auth] Auto Login Fail'};
      }

      const loadedUser: UserData = {...userData, tokenExpirationDate: new Date(userData.tokenExpirationDate)};
      console.log(!!this.authService.checkTokenExp(loadedUser));

      if (!!this.authService.checkTokenExp(loadedUser)) {
        const expirationDuration = new Date(userData.tokenExpirationDate).getTime() - new Date().getTime();

        this.authService.setLogoutTimer(expirationDuration);

        const isAdmin = loadedUser.roles.includes('ROLE_ADMIN');
        const isGuide = loadedUser.roles.includes('ROLE_GUIDE');
        const isVisitor = loadedUser.roles.includes('ROLE_VISITOR');

        return new AutoLoginSuccess({name: loadedUser.name, token: userData.token, isAdmin, isGuide, isVisitor});
      }

      return {type: '[Auth] Auto Login Fail'};
    })
  );

  @Effect()
  signUp = this.actions$.pipe(
    ofType(SIGN_UP_START),
    switchMap((signUpAction: SignUpStart) => this.http.post<Visitor>(
      '/visitor/visitors/add',
      {
        visitorId: '',
        username: signUpAction.payload.username,
        password: signUpAction.payload.password,
        fio: signUpAction.payload.fio,
        age: signUpAction.payload.age,
        email: signUpAction.payload.email
      }
    )
      .pipe(
        map((resData) => new SignUpSuccess({username: resData.username, password: resData.password})),
        catchError(this.handleError)
      ))
  );

  @Effect({dispatch: false})
  logout = this.actions$.pipe(
    ofType(LOGOUT),
    tap(() => {
      this.authService.clearLogoutTimer();
      this.router.navigate(['/']);
      localStorage.removeItem('userData');
    })
  );

  @Effect({dispatch: false})
  authLoginRedirect = this.actions$.pipe(
    ofType(FETCH_ROLE),
    tap(() => {
      this.router.navigate(['/']);
    })
  );

  @Effect()
  authLoginAfterSignUp = this.actions$.pipe(
    ofType(SIGN_UP_SUCCESS),
    map((signUpAction: SignUpSuccess) => new LoginStart({
      username: signUpAction.payload.username,
      password: signUpAction.payload.password
    }))
  );

  handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (!errorRes.error || !errorRes.error.error) {
      return of(new UpdateExhibitFail(errorMessage));
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
      case 'INVALID_PASSWORD':
        errorMessage = 'Email or password is not correct';
        break;
    }

    return of(new UpdateExhibitFail(errorMessage));
  }

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
  ) {
  }
}