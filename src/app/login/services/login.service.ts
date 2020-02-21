import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map, take, tap} from 'rxjs/operators';
import {User} from '../models/user.model';
import {Injectable} from '@angular/core';
import {BehaviorSubject, of, throwError} from 'rxjs';

export interface LoginResponseData {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  jti: string;
}

@Injectable()
export class LoginService {
  user = new BehaviorSubject<User>(null);

  constructor(
    private http: HttpClient,
  ) {}

  login(name, password) {
    return this.http.post<LoginResponseData>(
      '/api/oauth/token',
      {
        username: name,
        password,
        grant_type: 'password'
      }).pipe(
        catchError(this.handleError),
        tap(resData => {
          // console.log(resData);
          // const user = new User(name, resData.access_token);
          // this.user.next(user);
          // localStorage.setItem('access_token', resData.access_token);
        }),
    );
  }

  handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes);
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

}
