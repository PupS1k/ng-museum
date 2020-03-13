import {HttpErrorResponse, HttpRequest} from '@angular/common/http';

export function handleError(errorRes: HttpErrorResponse) {
  let errorMessage = 'An unknown error occurred!';

  if (!errorRes.error || !errorRes.error.error) {
    return errorMessage;
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

  return errorMessage;
}

export function decoratorRequestSpinner(req) {
  return req.setHeader('no-spinner', 'true');
}
