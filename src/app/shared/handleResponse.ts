import {HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject, throwError} from 'rxjs';
import {User} from '../login/models/user.model';

export function  handleError(errorRes: HttpErrorResponse) {
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


export function handleAuthentication(name: string, token: string, ) {
  const user = new User(name, token);
  this.user.next(user);
  localStorage.setItem('access_token', token);
}
