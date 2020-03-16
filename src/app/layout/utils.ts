import {HttpErrorResponse, HttpHeaders, HttpRequest} from '@angular/common/http';

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

// export function decoratorRequestSpinner(req: Observable<any>) {
//   const headers = new HttpHeaders({'no-spinner': 'true'});
//   console.log(req);
// }
// export function decoratorRequestSpinner(req: Observable<any>) {
//  return  req.pipe(tap(aaa => console.log(aaa)));
// }
export function decoratorRequestSpinner(method: string, url: string, body, headers, isShowSpinner: boolean): HttpRequest<any> {
  return new HttpRequest(
    method,
    url,
    body,
    {
      headers: new HttpHeaders({
        ...headers,
        'no-spinner': (isShowSpinner ? 'true' : '')
      }),
    },
  );
}
