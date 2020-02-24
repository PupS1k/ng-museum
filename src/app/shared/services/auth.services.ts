import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';

import {User} from '../../login/models/user.model';

export interface LoginResponseData {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  jti: string;
}

@Injectable()
export class AuthServices {
  user = new BehaviorSubject<User>(null);

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
      tap(resData => {
        // console.log(resData);
        // const user = new User(name, resData.access_token);
        // this.user.next(user);
        // localStorage.setItem('access_token', resData.access_token);
      }),
    );
  }

  signUp(name, password, age, email) {
    return this.http.post(
      'https://jsonplaceholder.typicode.com/todos',
      {
        name,
        password,
        age,
        email
      }).pipe(
      catchError(this.handleError),
      tap(resData => {
        // console.log(resData);
      })
    );
  }


  handleAuthentication(name: string, token: string, ) {
    const user = new User(name, token);
    this.user.next(user);
    localStorage.setItem('access_token', token);
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
  ) {}

}
