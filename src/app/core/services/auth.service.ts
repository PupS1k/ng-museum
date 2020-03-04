import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

import {UserData} from '../../auth/models/user-data.model';

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
export class AuthService {
  userData = new BehaviorSubject<UserData>(null);
  private _isAdmin = false;
  private _isGuide = false;
  private _isVisitor = false;

  private tokenExpirationTimer: any;

  get isAdmin() {
    return this._isAdmin;
  }

  get isGuide() {
    return this._isGuide;
  }

  get isVisitor() {
    return this._isVisitor;
  }

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
    const userData: UserData = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }

    this.checkRoles(userData.roles);

    const loadedUser: UserData = {...userData, tokenExpirationDate: new Date(userData.tokenExpirationDate)};

    if (this.getToken(loadedUser)) {
      this.userData.next(loadedUser);
      const expirationDuration = new Date(userData.tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  fetchRole() {
    return this.http.get<WhoiamResData[]>('/abo/whoiam')
      .pipe(catchError(this.handleError));
  }

  signUp(name, password, age, email) {
    return this.http.post<LoginResponseData>(
      '/visitor/visitors/add',
      {
        visitorId: '',
        username: name,
        password,
        fio: name,
        age,
        email
      }
    ).pipe(
      catchError(this.handleError),
      tap(resData => this.handleAuthentication(name, resData.access_token, resData.expires_in))
    );
  }


  logout() {
    this._isAdmin = false;
    this._isGuide = false;
    this._isVisitor = false;

    this.userData.next(null);

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
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);

    this.autoLogout(expiresIn * 1000);

    localStorage.setItem('userData', JSON.stringify({name, token, tokenExpirationDate: expirationDate}));

    this.fetchRole().subscribe(resData => {
        const roles = resData.map((role: WhoiamResData) => role.authority);

        this.checkRoles(roles);

        const user: UserData = {name, token, tokenExpirationDate: expirationDate, roles};

        this.userData.next(user);

        localStorage.setItem('userData', JSON.stringify(user));
      },
      (error => console.log(error))
    );
  }

  checkRoles(roles: string[]) {
    this._isAdmin = roles.includes('ROLE_ADMIN');
    this._isGuide = roles.includes('ROLE_GUIDE');
    this._isVisitor = roles.includes('ROLE_VISITOR');
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

  getToken(userData) {
    if (!userData.tokenExpirationDate || new Date() > userData.tokenExpirationDate) {
      return null;
    }
    return userData.token;
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

}
