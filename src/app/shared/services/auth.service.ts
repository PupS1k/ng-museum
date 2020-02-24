import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';

import {User} from '../../login/models/user.model';
import {Router} from '@angular/router';

export interface LoginResponseData {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  jti: string;
}

@Injectable()
export class AuthService {
  user = new BehaviorSubject<User>(null);

  private tokenExpirationTimer: any;

  login(name, password) {

    let body = new HttpParams();
    body = body.set('username', name);
    body = body.set('password', password);
    body = body.set('grant_type', 'password');

    return this.http.post<LoginResponseData>(
      'oauth/token',
      body,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa('Client' + ':' + 'Secret'),
        })
      }
    ).pipe(
      catchError(this.handleError),
      tap(resData => this.handleAuthentication(name, resData.access_token, resData.expires_in)),
    );
  }

  autoLogin() {
    const userData: {
      name: string,
      _token: string,
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.name,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  signUp(name, password, age, email) {
    let body = new HttpParams();
    body = body.set('username', name);
    body = body.set('password', password);
    body = body.set('grant_type', 'password');

    return this.http.post<LoginResponseData>(
      'https://jsonplaceholder.typicacode.com/todos',
      {
        name,
        password,
        age,
        email
      }).pipe(
      catchError(this.handleError),
      tap(resData => this.handleAuthentication(name, resData.access_token, resData.expires_in))
    );
  }


  logout() {
    this.user.next(null);

    this.router.navigate(['/']);

    localStorage.removeItem('userData');

    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDate: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDate);
  }


  handleAuthentication(name: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn);
    this.autoLogout(expiresIn * 1000);

    const user = new User(name, token, expirationDate);
    this.user.next(user);

    localStorage.setItem('userData', JSON.stringify(user));
  }

  handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
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

    return throwError(errorMessage);
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

}
