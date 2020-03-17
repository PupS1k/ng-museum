import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {of} from 'rxjs';

import {
  DELETE_EXHIBIT_FROM_TOUR_START, DeleteExhibitFromTourStart, DeleteExhibitFromTourSuccess,
  FETCH_EXHIBIT_START,
  FETCH_EXHIBITS_START,
  FetchExhibitsSuccess,
  FetchExhibitStart,
  FetchExhibitSuccess,
  UPDATE_EXHIBIT_START, UPDATE_EXHIBIT_SUCCESS, UpdateExhibitStart, UpdateExhibitSuccess
} from './exhibit.actions';
import {Exhibit} from '../models/exhibit.model';
import {ShowMessage} from '../../layout/store/layout.actions';
import {handleError, prepareErrorUrlParams} from '../../layout/utils';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {selectExhibitId, selectExhibitTours} from './exhibits.selectors';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable()
export class ExhibitEffects {
  @Effect()
  fetchExhibits = this.actions$.pipe(
    ofType(FETCH_EXHIBITS_START),
    switchMap(() => this.http.get<Exhibit[]>('/exhibit/exhibits')
      .pipe(
        map((exhibits: Exhibit[]) => new FetchExhibitsSuccess(exhibits)),
        catchError(err => of(new ShowMessage({module: 'Exhibit', message: handleError(err)})))
      )
    )
  );

  @Effect()
  fetchExhibit = this.actions$.pipe(
    ofType(FETCH_EXHIBIT_START),
    switchMap(
      (fetchExhibitStart: FetchExhibitStart) => this.http.get<Exhibit>(`/exhibit/exhibits/${fetchExhibitStart.payload}`)
        .pipe(
          map((exhibit: Exhibit) => new FetchExhibitSuccess(exhibit)),
          catchError(err => of(new ShowMessage({module: 'Exhibit', message: handleError(err)})))
        ))
  );

  @Effect()
  updateExhibit = this.actions$.pipe(
    ofType(UPDATE_EXHIBIT_START),
    withLatestFrom(this.store),
    switchMap(([updateExhibitStart, state]: [UpdateExhibitStart, AppState]) => this.http.post<Exhibit>(
      `/exhibit/exhibits/update/${selectExhibitId(state)}`,
      {
        exhibitId: selectExhibitId(state),
        ...updateExhibitStart.payload,
        tourEntitySet: selectExhibitTours(state)
      }
      )
        .pipe(
          map((exhibit: Exhibit) => new UpdateExhibitSuccess(exhibit)),
          catchError(err => of(new ShowMessage({module: 'Exhibit', message: handleError(err)})))
        )
    )
  );

  @Effect()
  deleteExhibit = this.actions$.pipe(
    ofType(DELETE_EXHIBIT_FROM_TOUR_START),
    withLatestFrom(this.store),
    switchMap(([deleteExhibitStart, state]: [DeleteExhibitFromTourStart, AppState]) => {
      const headers: HttpHeaders = prepareErrorUrlParams();
      return this.http.post(
          `/exhibit/exhibits/removeTour`,
          {
            tourId: deleteExhibitStart.payload,
            exhibitId: selectExhibitId(state)
          },
        {headers}
        )
          .pipe(
            map(() => new DeleteExhibitFromTourSuccess(deleteExhibitStart.payload)),
            catchError(err => of(new ShowMessage({module: 'Exhibit', message: handleError(err)})))
          );
      }
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
    private router: Router,
    private store: Store<AppState>
  ) {
  }
}
