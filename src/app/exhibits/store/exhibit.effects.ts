import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {of} from 'rxjs';

import {
  DELETE_EXHIBIT_FROM_TOUR_START,
  DeleteExhibitFromTourStart, DeleteExhibitFromTourSuccess,
  FETCH_EXHIBIT_START,
  FETCH_EXHIBITS_START,
  FetchExhibitsSuccess,
  FetchExhibitStart,
  FetchExhibitSuccess,
  UPDATE_EXHIBIT_START, UPDATE_EXHIBIT_SUCCESS, UpdateExhibitStart, UpdateExhibitSuccess
} from './exhibit.actions';
import {Exhibit} from '../models/exhibit.model';
import {ShowMessage} from '../../layout/store/layout.actions';
import {handleError} from '../../layout/utils';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {selectExhibit, selectExhibitId} from './exhibits.selectors';
import {HttpClient} from '@angular/common/http';
import {ApiExhibitsService} from '../services/api-exhibits.service';
import {ExhibitForm} from '../models/exhibit-form.model';
import {Tour} from '../../tours/models/tour.model';


@Injectable()
export class ExhibitEffects {
  @Effect()
  fetchExhibits = this.actions$.pipe(
    ofType(FETCH_EXHIBITS_START),
    switchMap(() => this.apiExhibitsService.getExhibits()
      .pipe(
        map((exhibits: Exhibit[]) => new FetchExhibitsSuccess(exhibits)),
        catchError(err => of(new ShowMessage({module: 'Exhibit', message: handleError(err)})))
      )
    )
  );

  @Effect()
  fetchExhibit = this.actions$.pipe(
    ofType<FetchExhibitStart>(FETCH_EXHIBIT_START),
    map(action => action.payload),
    switchMap(exhibitId => this.apiExhibitsService.getExhibit(exhibitId)
      .pipe(
        map((exhibit: Exhibit) => new FetchExhibitSuccess(exhibit)),
        catchError(err => of(new ShowMessage({module: 'Exhibit', message: handleError(err)})))
      ))
  );

  @Effect()
  updateExhibit = this.actions$.pipe(
    ofType<UpdateExhibitStart>(UPDATE_EXHIBIT_START),
    map(action => action.payload),
    withLatestFrom(this.store.select(selectExhibit)),
    switchMap(([exhibitFormData, exhibit]: [ExhibitForm, Exhibit]) => this.apiExhibitsService
      .updateExhibit(exhibit, exhibitFormData)
      .pipe(
        map((updatedExhibit: Exhibit) => new UpdateExhibitSuccess(updatedExhibit)),
        catchError(err => of(new ShowMessage({module: 'Exhibit', message: handleError(err)})))
      )
    )
  );

  @Effect()
  deleteExhibit = this.actions$.pipe(
    ofType<DeleteExhibitFromTourStart>(DELETE_EXHIBIT_FROM_TOUR_START),
    map(action => action.payload),
    withLatestFrom(this.store.select(selectExhibitId)),
    switchMap(([tourId, exhibitId]: [Tour['tourId'], Exhibit['exhibitId']]) => this.apiExhibitsService
      .deleteExhibitFromTour(tourId, exhibitId)
      .pipe(
        map(() => new DeleteExhibitFromTourSuccess(tourId)),
        catchError(err => of(new ShowMessage({module: 'Exhibit', message: handleError(err)})))
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
    private router: Router,
    private apiExhibitsService: ApiExhibitsService,
    private store: Store<AppState>
  ) {
  }
}
