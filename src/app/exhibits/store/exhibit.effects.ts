import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {of} from 'rxjs';

import {
  FETCH_EXHIBIT_START,
  FETCH_EXHIBITS_START,
  FetchExhibitsSuccess,
  FetchExhibitStart,
  FetchExhibitSuccess,
  UPDATE_EXHIBIT_START, UPDATE_EXHIBIT_SUCCESS, UpdateExhibitStart, UpdateExhibitSuccess
} from './exhibit.actions';
import {Exhibit} from '../models/exhibit.model';
import {CatchMessageAlert} from '../../layout/store/layout.actions';
import {handleError} from '../../layout/utils';



@Injectable()
export class ExhibitEffects {
  @Effect()
  fetchExhibits = this.actions$.pipe(
    ofType(FETCH_EXHIBITS_START),
    switchMap(() => this.http.get<Exhibit[]>('/exhibit/exhibits')
      .pipe(
        map((exhibits: Exhibit[]) => new FetchExhibitsSuccess(exhibits)),
        catchError(err => of(new CatchMessageAlert({module: 'Exhibit', message: handleError(err)})))
      ))
  );

  @Effect()
  fetchExhibit = this.actions$.pipe(
    ofType(FETCH_EXHIBIT_START),
    switchMap(
      (fetchExhibitStart: FetchExhibitStart) => this.http.get<Exhibit>(`/exhibit/exhibits/${fetchExhibitStart.payload}`)
        .pipe(
          map((exhibit: Exhibit) => new FetchExhibitSuccess(exhibit)),
          catchError(err => of(new CatchMessageAlert({module: 'Exhibit', message: handleError(err)})))
        ))
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
          catchError(err => of(new CatchMessageAlert({module: 'Exhibit', message: handleError(err)})))
        )
    )
  );

  @Effect({dispatch: false})
  updateExhibitRedirect = this.actions$.pipe(
    ofType(UPDATE_EXHIBIT_SUCCESS),
    tap(() => this.router.navigate(['/exhibits']))
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {
  }
}
