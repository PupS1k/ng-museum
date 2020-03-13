import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {of} from 'rxjs';

import {
  ADD_FAVOURITE_TOUR_START, AddFavouriteTourStart, AddFavouriteTourSuccess,
  CheckFavouriteTourSuccess,
  DELETE_FAVOURITE_TOUR_START,
  DeleteFavouriteTourStart, DeleteFavouriteTourSuccess,
  FETCH_TOUR_START, FETCH_TOUR_SUCCESS,
  FETCH_TOURS_START,
  FetchExhibitsTourSuccess, FetchGuideTourSuccess,
  FetchToursSuccess,
  FetchTourStart,
  FetchTourSuccess, FetchVisitorsTourSuccess,
  UPDATE_TOUR_START,
  UPDATE_TOUR_SUCCESS,
  UpdateTourStart,
  UpdateTourSuccess

} from './tour.actions';
import {Tour} from '../models/tour.model';
import {Exhibit} from '../../exhibits/models/exhibit.model';
import {Action, Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {selectTourId} from './tour.selectors';
import {selectUserVisitorId, selectVisitorInfoId} from '../../profile/store/profile.selectors';
import {ShowMessage} from '../../layout/store/layout.actions';
import {handleError} from '../../layout/utils';
import {selectIsAdmin, selectIsGuide} from '../../auth/store/auth.selectors';
import {Guide} from '../../guides/models/guide.model';
import {Visitor} from '../../visitors/models/visitor.model';


@Injectable()
export class TourEffects {
  @Effect()
  fetchTours = this.actions$.pipe(
    ofType(FETCH_TOURS_START),
    switchMap(() => this.http.get<Tour[]>('/tor/tours')
      .pipe(
        map((tours: Tour[]) => new FetchToursSuccess(tours)),
        catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
      ))
  );

  @Effect()
  fetchTour = this.actions$.pipe(
    ofType(FETCH_TOUR_START),
    switchMap(
      (fetchTour: FetchTourStart) => this.http.get<Tour>(`/tour/tours/${fetchTour.payload}`)
        .pipe(
          map((tour: Tour) => new FetchTourSuccess(tour)),
          catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
        )
    )
  );

  @Effect()
  updateTour = this.actions$.pipe(
    ofType(UPDATE_TOUR_START),
    withLatestFrom(this.store),
    switchMap(([updateTour, state]: [UpdateTourStart, AppState]) => this.http.post<Tour>(
      `/tour/tours/update/${selectTourId(state)}`,
      {
        ...updateTour.payload,
        tourId: selectTourId(state)
      }
      )
        .pipe(
          map((tour: Tour) => new UpdateTourSuccess(tour)),
          catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
        )
    )
  );

  @Effect()
  fetchExhibitsTour = this.actions$.pipe(
    ofType(FETCH_TOUR_SUCCESS),
    switchMap(
      (fetchTour: FetchTourSuccess) => this.http.get<Exhibit[]>(
        `tour/exhibits/${fetchTour.payload.tourId}`
      )
        .pipe(
          map((exhibits: Exhibit[]) => new FetchExhibitsTourSuccess(exhibits)),
          catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
        )
    )
  );

  @Effect()
  fetchGuideTour = this.actions$.pipe(
    ofType(FETCH_TOUR_SUCCESS),
    withLatestFrom(this.store),
    switchMap(([fetchTour, state]: [FetchTourSuccess, AppState]) => {
        if (selectIsGuide(state)) {
          return this.http.get<Guide>(
            `tour/tours/guide/${fetchTour.payload.tourId}`
          )
            .pipe(
              map((guide: Guide) => new FetchGuideTourSuccess(guide)),
              catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
            );
        } else {
          return of(new FetchGuideTourSuccess(null));
        }
      }
    )
  );

  @Effect()
  fetchVisitorsTour = this.actions$.pipe(
    ofType(FETCH_TOUR_SUCCESS),
    withLatestFrom(this.store),
    switchMap(([fetchTour, state]: [FetchTourSuccess, AppState]) => {
        if (selectIsAdmin(state)) {
          return this.http.get<Visitor[]>(
            `tour/tours/visitors/${fetchTour.payload.tourId}`
          )
            .pipe(
              map((visitors: Visitor[]) => new FetchVisitorsTourSuccess(visitors)),
              catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
            );
        } else {
          return of(new FetchVisitorsTourSuccess([]));
        }
      }
    )
  );

  @Effect()
  checkFavouriteTour = this.actions$.pipe(
    ofType(FETCH_TOUR_SUCCESS),
    withLatestFrom(this.store),
    switchMap(([action, state]: [Action, AppState]) => {
        if (!selectIsGuide(state)) {
          return this.http.post<boolean>(
            `visitor/toursCheck`,
            {
              tourId: selectTourId(state),
              visitorId: selectUserVisitorId(state)
            },
            {
              headers: {
                'no-spinner': 'true'
              }
            }
          )
            .pipe(
              map((isFavouriteTour: boolean) => new CheckFavouriteTourSuccess(isFavouriteTour)),
              catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
            );
        } else {
          return of(new CheckFavouriteTourSuccess(false));
        }
      }
    )
  );

  @Effect()
  deleteFavouriteTour = this.actions$.pipe(
    ofType(DELETE_FAVOURITE_TOUR_START),
    withLatestFrom(this.store),
    switchMap(([action, state]: [Action, AppState]) => this.http.post(
      `visitor/visitors/removeTour`,
      {tourId: selectTourId(state), visitorId: selectVisitorInfoId(state)},
      {
        headers: {
          'no-spinner': 'true'
        }
      }
      )
        .pipe(
          map(() => new DeleteFavouriteTourSuccess()),
          catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
        )
    )
  );

  @Effect()
  addFavouriteTour = this.actions$.pipe(
    ofType(ADD_FAVOURITE_TOUR_START),
    withLatestFrom(this.store),
    switchMap(([action, state]: [Action, AppState]) => this.http.post(
      `visitor/visitors/addTour`,
      {tourId: selectTourId(state), visitorId: selectVisitorInfoId(state)},
      {
        headers: {
          'no-spinner': 'true'
        }
      }
      )
        .pipe(
          map(() => new AddFavouriteTourSuccess()),
          catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
        )
    )
  );

  @Effect({dispatch: false})
  updateTourRedirect = this.actions$.pipe(
    ofType(UPDATE_TOUR_SUCCESS),
    tap(() => this.router.navigate(['/tours']))
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>
  ) {
  }
}
