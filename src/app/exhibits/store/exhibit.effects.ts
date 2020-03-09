import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {of} from 'rxjs';

import {
  FETCH_EXHIBIT_START,
  FETCH_EXHIBITS_START,
  FetchExhibitsSuccess,
  FetchExhibitStart,
  FetchExhibitSuccess,
  UPDATE_EXHIBIT_START, UPDATE_EXHIBIT_SUCCESS, UpdateExhibitFail, UpdateExhibitStart, UpdateExhibitSuccess
} from './exhibit.actions';
import {Exhibit} from '../models/exhibit.model';



@Injectable()
export class ExhibitEffects {
  @Effect()
  fetchExhibits = this.actions$.pipe(
    ofType(FETCH_EXHIBITS_START),
    switchMap(() => this.http.get<Exhibit[]>('/exhibit/exhibits')
      .pipe(map((exhibits: Exhibit[]) => new FetchExhibitsSuccess(exhibits))))
  );

  @Effect()
  fetchExhibit = this.actions$.pipe(
    ofType(FETCH_EXHIBIT_START),
    switchMap(
      (fetchExhibitStart: FetchExhibitStart) => this.http.get<Exhibit>(`/exhibit/exhibits/${fetchExhibitStart.payload}`)
        .pipe(map((exhibit: Exhibit) => new FetchExhibitSuccess(exhibit))))
  );

  @Effect()
  updateExhibit = this.actions$.pipe(
    ofType(UPDATE_EXHIBIT_START),
    switchMap(
      (updateExhibitStart: UpdateExhibitStart) => this.http.post<Exhibit>(
        `/exhibit/exhibits/update/${updateExhibitStart.payload.exhibitId}`,
        updateExhibitStart.payload
      )
        .pipe(
          map((exhibit: Exhibit) => new UpdateExhibitSuccess(exhibit)),
          catchError(this.handleError)
        )
    )
  );

  @Effect({dispatch: false})
  updateExhibitRedirect = this.actions$.pipe(
    ofType(UPDATE_EXHIBIT_SUCCESS),
    tap(() => this.router.navigate(['/exhibits']))
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
    private router: Router
  ) {
  }
}
