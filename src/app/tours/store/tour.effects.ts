import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {of} from 'rxjs';

import {
  ADD_FAVOURITE_TOUR_START,
  AddFavouriteTourSuccess,
  CHECK_FAVOURITE_TOUR_START,
  CheckFavouriteTourStart,
  CheckFavouriteTourSuccess,
  DELETE_EXHIBIT_TOUR_START,
  DELETE_FAVOURITE_TOUR_START,
  DELETE_GUIDE_TOUR_START,
  DELETE_VISITOR_TOUR_START,
  DeleteExhibitTourStart,
  DeleteExhibitTourSuccess, DeleteFavouriteTourStart,
  DeleteFavouriteTourSuccess,
  DeleteGuideTourStart,
  DeleteGuideTourSuccess,
  DeleteVisitorTourStart, DeleteVisitorTourSuccess,
  FETCH_EXHIBITS_TOUR_START,
  FETCH_GUIDE_TOUR_START,
  FETCH_TOUR_START,
  FETCH_TOUR_SUCCESS,
  FETCH_TOURS_START,
  FETCH_VISITORS_TOUR_START,
  FetchExhibitsTourStart,
  FetchExhibitsTourSuccess,
  FetchGuideTourStart,
  FetchGuideTourSuccess,
  FetchToursSuccess,
  FetchTourStart,
  FetchTourSuccess,
  FetchVisitorsTourStart,
  FetchVisitorsTourSuccess,
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
import {selectExhibitId} from '../../exhibits/store/exhibits.selectors';
import {DeleteExhibitFromTourStart} from '../../exhibits/store/exhibit.actions';


@Injectable()
export class TourEffects {
  @Effect()
  fetchTours = this.actions$.pipe(
    ofType(FETCH_TOURS_START),
    switchMap(() => this.http.get<Tour[]>('/tour/tours')
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
  deleteExhibitTour = this.actions$.pipe(
    ofType(DELETE_EXHIBIT_TOUR_START),
    withLatestFrom(this.store),
    switchMap(([deleteExhibitTour, state]: [DeleteExhibitTourStart, AppState]) => this.http.post(
      `/exhibit/exhibits/removeTour`,
      {
        tourId: selectTourId(state),
        exhibitId: deleteExhibitTour.payload
      },
      {
        headers: {
          'no-spinner': 'true'
        }
      }
      )
        .pipe(
          map(() => new DeleteExhibitTourSuccess(deleteExhibitTour.payload)),
          catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
        )
    )
  );

  @Effect()
  deleteGuideTour = this.actions$.pipe(
    ofType(DELETE_GUIDE_TOUR_START),
    withLatestFrom(this.store),
    switchMap(([deleteGuideTour, state]: [DeleteGuideTourStart, AppState]) => this.http.post(
      `/guide/guides/removeTour`,
      {
        tourId: selectTourId(state),
        guideId: deleteGuideTour.payload
      },
      {
        headers: {
          'no-spinner': 'true'
        }
      }
      )
        .pipe(
          map(() => new DeleteGuideTourSuccess()),
          catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
        )
    )
  );

  @Effect()
  deleteVisitorTour = this.actions$.pipe(
    ofType(DELETE_VISITOR_TOUR_START),
    withLatestFrom(this.store),
    switchMap(([deleteVisitorTour, state]: [DeleteVisitorTourStart, AppState]) => this.http.post(
      `/visitor/visitors/removeTour`,
      {
        tourId: selectTourId(state),
        visitorId: deleteVisitorTour.payload
      },
      {
        headers: {
          'no-spinner': 'true'
        }
      }
      )
        .pipe(
          map(() => new DeleteVisitorTourSuccess(deleteVisitorTour.payload)),
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
    ofType(FETCH_EXHIBITS_TOUR_START),
    switchMap(
      (fetchExhibitsTour: FetchExhibitsTourStart) => this.http.get<Exhibit[]>(
        `tour/exhibits/${fetchExhibitsTour.payload}`
      )
        .pipe(
          map((exhibits: Exhibit[]) => new FetchExhibitsTourSuccess(exhibits)),
          catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
        )
    )
  );

  @Effect()
  fetchAdditionalData = this.actions$.pipe(
    ofType(FETCH_TOUR_SUCCESS),
    withLatestFrom(this.store),
    switchMap(([fetchTour, state]: [FetchTourSuccess, AppState]) => {
      if (selectIsGuide(state)) {
        this.store.dispatch(new FetchGuideTourStart(fetchTour.payload.tourId));
      } else {
        this.store.dispatch(new CheckFavouriteTourStart({
          tourId: fetchTour.payload.tourId,
          visitorId: selectUserVisitorId(state)
        }));
      }

      if (selectIsAdmin(state)) {
        this.store.dispatch(new FetchVisitorsTourStart(fetchTour.payload.tourId));
      }

      return of(new FetchExhibitsTourStart(fetchTour.payload.tourId));
    }),
    catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
  );

  @Effect()
  fetchGuideTour = this.actions$.pipe(
    ofType(FETCH_GUIDE_TOUR_START),
    switchMap((fetchGuideTour: FetchGuideTourStart) =>
      this.http.get<Guide>(
        `tour/tours/guide/${fetchGuideTour.payload}`
      )
        .pipe(
          map((guide: Guide) => new FetchGuideTourSuccess(guide)),
          catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
        )
    )
  );

  @Effect()
  fetchVisitorsTour = this.actions$.pipe(
    ofType(FETCH_VISITORS_TOUR_START),
    switchMap((fetchVisitorsTour: FetchVisitorsTourStart) =>
      this.http.get<Visitor[]>(
        `tour/tours/visitors/${fetchVisitorsTour.payload}`
      )
        .pipe(
          map((visitors: Visitor[]) => new FetchVisitorsTourSuccess(visitors)),
          catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
        )
    )
  );

  @Effect()
  checkFavouriteTour = this.actions$.pipe(
    ofType(CHECK_FAVOURITE_TOUR_START),
    switchMap((checkFavouriteTour: CheckFavouriteTourStart) => this.http.post<boolean>(
      `visitor/toursCheck`,
      {
        tourId: checkFavouriteTour.payload.tourId,
        visitorId: checkFavouriteTour.payload.visitorId
      }
      )
        .pipe(
          map((isFavouriteTour: boolean) => new CheckFavouriteTourSuccess(isFavouriteTour)),
          catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
        )
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
