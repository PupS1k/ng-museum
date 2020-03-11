import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
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
  FetchExhibitsTourSuccess,
  FetchToursSuccess,
  FetchTourStart,
  FetchTourSuccess,
  UPDATE_TOUR_START,
  UPDATE_TOUR_SUCCESS,
  UpdateTourFail,
  UpdateTourStart,
  UpdateTourSuccess

} from './tour.actions';
import {Tour} from '../models/tour.model';
import {Exhibit} from '../../exhibits/models/exhibit.model';
import {Action, Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {selectSelectedTourId} from './tour.selectors';
import {selectUserVisitorId} from '../../profile/store/profile.selectors';


@Injectable()
export class TourEffects {
  @Effect()
  fetchTours = this.actions$.pipe(
    ofType(FETCH_TOURS_START),
    switchMap(() => this.http.get<Tour[]>('/tour/tours')
      .pipe(map((tours: Tour[]) => new FetchToursSuccess(tours))))
  );

  @Effect()
  fetchTour = this.actions$.pipe(
    ofType(FETCH_TOUR_START),
    switchMap(
      (fetchTour: FetchTourStart) => this.http.get<Tour>(`/tour/tours/${fetchTour.payload}`)
        .pipe(map((tour: Tour) => new FetchTourSuccess(tour))))
  );

  @Effect()
  updateTour = this.actions$.pipe(
    ofType(UPDATE_TOUR_START),
    switchMap(
      (updateTour: UpdateTourStart) => this.http.post<Tour>(
        `/tour/tours/update/${updateTour.payload.tourId}`,
        updateTour.payload
      )
        .pipe(
          map((tour: Tour) => new UpdateTourSuccess(tour)),
          catchError(this.handleError)
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
          map((exhibits: Exhibit[]) => new FetchExhibitsTourSuccess(exhibits))
        )
    )
  );

  @Effect()
  checkFavouriteTour = this.actions$.pipe(
    ofType(FETCH_TOUR_SUCCESS),
    withLatestFrom(this.store),
    switchMap(([action, state]: [Action, AppState]) => this.http.post<boolean>(
      `visitor/toursCheck`,
      {
        tourId: selectSelectedTourId(state),
        visitorId: selectUserVisitorId(state)
      }
      )
        .pipe(
          map((isFavouriteTour: boolean) => new CheckFavouriteTourSuccess(isFavouriteTour)),
          catchError(this.handleError)
        )
    )
  );

  @Effect()
  deleteFavouriteTour = this.actions$.pipe(
    ofType(DELETE_FAVOURITE_TOUR_START),
    switchMap((deleteFavouriteTour: DeleteFavouriteTourStart) => this.http.post(
      `visitor/visitors/removeTour`,
      {tourId: deleteFavouriteTour.payload.tourId, visitorId: deleteFavouriteTour.payload.visitorId}
      )
        .pipe(
          map(() => new DeleteFavouriteTourSuccess()),
          catchError(this.handleError)
        )
    )
  );

  @Effect()
  addFavouriteTour = this.actions$.pipe(
    ofType(ADD_FAVOURITE_TOUR_START),
    switchMap((addFavouriteTour: AddFavouriteTourStart) => this.http.post(
      `visitor/visitors/addTour`,
      {tourId: addFavouriteTour.payload.tourId, visitorId: addFavouriteTour.payload.visitorId}
      )
        .pipe(
          map(() => new AddFavouriteTourSuccess()),
          catchError(this.handleError)
        )
    )
  );

  @Effect({dispatch: false})
  updateTourRedirect = this.actions$.pipe(
    ofType(UPDATE_TOUR_SUCCESS),
    tap(() => this.router.navigate(['/tours']))
  );


  handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (!errorRes.error || !errorRes.error.error) {
      return of(new UpdateTourFail(errorMessage));
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

    return of(new UpdateTourFail(errorMessage));
  }

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>
  ) {
  }
}
