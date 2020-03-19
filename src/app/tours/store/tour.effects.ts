import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';

import {
  ADD_FAVOURITE_TOUR_START, AddFavouriteTourStart,
  CHECK_FAVOURITE_TOUR_START,
  CheckFavouriteTourStart,
  CheckFavouriteTourSuccess,
  DELETE_EXHIBIT_TOUR_START,
  DELETE_FAVOURITE_TOUR_START,
  DELETE_GUIDE_TOUR_START,
  DELETE_VISITOR_TOUR_START,
  DeleteExhibitTourStart,
  DeleteExhibitTourSuccess, DeleteFavouriteTourStart,
  DeleteGuideTourStart,
  DeleteGuideTourSuccess,
  DeleteVisitorTourStart, DeleteVisitorTourSuccess, FETCH_DATA_TOUR_START,
  FETCH_EXHIBITS_TOUR_START,
  FETCH_GUIDE_TOUR_START,
  FETCH_TOUR_START,
  FETCH_TOUR_SUCCESS,
  FETCH_TOURS_START,
  FETCH_VISITORS_TOUR_START, FetchDataTourStart,
  FetchExhibitsTourStart,
  FetchExhibitsTourSuccess,
  FetchGuideTourStart,
  FetchGuideTourSuccess,
  FetchToursSuccess,
  FetchTourStart,
  FetchTourSuccess,
  FetchVisitorsTourStart,
  FetchVisitorsTourSuccess, ToggleFavouriteTour,
  UPDATE_TOUR_START,
  UPDATE_TOUR_SUCCESS,
  UpdateTourStart,
  UpdateTourSuccess
} from './tour.actions';
import {Tour} from '../models/tour.model';
import {Exhibit} from '../../exhibits/models/exhibit.model';
import {AppState} from '../../app.reducer';
import {selectTourId} from './tour.selectors';
import {selectUserVisitorId} from '../../profile/store/profile.selectors';
import {ShowMessage} from '../../layout/store/layout.actions';
import {handleError} from '../../layout/utils';
import {selectIsAdmin, selectIsGuide} from '../../auth/store/auth.selectors';
import {Guide} from '../../guides/models/guide.model';
import {Visitor} from '../../visitors/models/visitor.model';
import {ApiToursService} from '../service/api-tours.service';
import {ToursService} from '../service/tours.service';


@Injectable()
export class TourEffects {
  @Effect()
  fetchTours = this.actions$.pipe(
    ofType(FETCH_TOURS_START),
    switchMap(() => this.apiToursService.getTours()
      .pipe(
        map((tours: Tour[]) => new FetchToursSuccess(tours)),
        catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
      ))
  );

  @Effect()
  fetchTour = this.actions$.pipe(
    ofType<FetchTourStart>(FETCH_TOUR_START),
    map(action => action.payload),
    switchMap((tourId) => this.apiToursService.getTour(tourId)
      .pipe(
        map((tour: Tour) => new FetchTourSuccess(tour)),
        catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
      )
    )
  );


  @Effect()
  deleteExhibitTour = this.actions$.pipe(
    ofType<DeleteExhibitTourStart>(DELETE_EXHIBIT_TOUR_START),
    map(action => action.payload),
    withLatestFrom(this.store.select(selectTourId)),
    switchMap(([exhibitId, tourId]: [Exhibit['exhibitId'], Tour['tourId']]) => this.apiToursService
      .deleteExhibitFromTour({tourId, exhibitId})
      .pipe(
        map(() => new DeleteExhibitTourSuccess(exhibitId)),
        catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
      ))
  );

  @Effect()
  deleteGuideTour = this.actions$.pipe(
    ofType<DeleteGuideTourStart>(DELETE_GUIDE_TOUR_START),
    map(action => action.payload),
    withLatestFrom(this.store.select(selectTourId)),
    switchMap(([guideId, tourId]: [Guide['guideId'], Tour['tourId']]) => this.apiToursService
      .deleteGuideFromTour({guideId, tourId})
      .pipe(
        map(() => new DeleteGuideTourSuccess()),
        catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
      ))
  );

  @Effect()
  deleteVisitorTour = this.actions$.pipe(
    ofType<DeleteVisitorTourStart>(DELETE_VISITOR_TOUR_START),
    map(action => action.payload),
    withLatestFrom(this.store.select(selectTourId)),
    switchMap(([visitorId, tourId]: [Visitor['visitorId'], Tour['tourId']]) => this.apiToursService
      .deleteVisitorFromTour({visitorId, tourId})
      .pipe(
        map(() => new DeleteVisitorTourSuccess(visitorId)),
        catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
      ))
  );

  @Effect()
  updateTour = this.actions$.pipe(
    ofType<UpdateTourStart>(UPDATE_TOUR_START),
    map(action => action.payload),
    withLatestFrom(this.store.select(selectTourId)),
    switchMap(([updatedTour, tourId]: [Tour, Tour['tourId']]) => this.apiToursService
      .updateTour(updatedTour, tourId)
      .pipe(
        map((tour: Tour) => new UpdateTourSuccess(tour)),
        catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
      )
    )
  );

  @Effect()
  fetchExhibitsTour = this.actions$.pipe(
    ofType<FetchExhibitsTourStart>(FETCH_EXHIBITS_TOUR_START),
    map(action => action.payload),
    switchMap((tourId: Tour['tourId']) => this.apiToursService.getExhibitsTour(tourId)
      .pipe(
        map((exhibits: Exhibit[]) => new FetchExhibitsTourSuccess(exhibits)),
        catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
      )
    )
  );

  @Effect()
  fetchDataTour = this.actions$.pipe(
    ofType<FetchTourSuccess>(FETCH_TOUR_SUCCESS),
    map(action => action.payload),
    map((tour: Tour) => new FetchDataTourStart(tour))
  );

  @Effect()
  fetchAdditionalData = this.actions$.pipe(
    ofType<FetchDataTourStart>(FETCH_DATA_TOUR_START),
    map(action => action.payload.tourId),
    withLatestFrom(this.store),
    map(([tourId, state]: [Tour['tourId'], AppState]) => this.toursService
      .getAdditionalDataTour(tourId, selectIsGuide(state), selectIsAdmin(state), selectUserVisitorId(state)))
  );

  @Effect()
  fetchGuideTour = this.actions$.pipe(
    ofType<FetchGuideTourStart>(FETCH_GUIDE_TOUR_START),
    map(action => action.payload),
    switchMap((tourId: Tour['tourId']) => this.apiToursService.getGuideTour(tourId)
      .pipe(
        map((guide: Guide) => new FetchGuideTourSuccess(guide)),
        catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
      )
    )
  );

  @Effect()
  fetchVisitorsTour = this.actions$.pipe(
    ofType<FetchVisitorsTourStart>(FETCH_VISITORS_TOUR_START),
    map(action => action.payload),
    switchMap((tourId: Tour['tourId']) => this.apiToursService.getVisitorsTour(tourId)
      .pipe(
        map((visitors: Visitor[]) => new FetchVisitorsTourSuccess(visitors)),
        catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
      )
    )
  );

  @Effect()
  checkFavouriteTour = this.actions$.pipe(
    ofType<CheckFavouriteTourStart>(CHECK_FAVOURITE_TOUR_START),
    map(action => action.payload),
    switchMap((body) => this.apiToursService.checkFavouriteTour(body)
      .pipe(
        map((isFavouriteTour: boolean) => new CheckFavouriteTourSuccess(isFavouriteTour)),
        catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
      )
    )
  );

  @Effect()
  deleteFavouriteTour = this.actions$.pipe(
    ofType<DeleteFavouriteTourStart>(DELETE_FAVOURITE_TOUR_START),
    map(action => action.payload),
    withLatestFrom(this.store.select(selectUserVisitorId)),
    switchMap(([tourId, visitorId]: [Tour['tourId'], Visitor['visitorId']]) => this.apiToursService
      .deleteFavouriteTour({tourId, visitorId})
      .pipe(
        map(() => new ToggleFavouriteTour()),
        catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
      ))
  );

  @Effect()
  addFavouriteTour = this.actions$.pipe(
    ofType<AddFavouriteTourStart>(ADD_FAVOURITE_TOUR_START),
    map(action => action.payload),
    withLatestFrom(this.store.select(selectUserVisitorId)),
    switchMap(([tourId, visitorId]: [Tour['tourId'], Visitor['visitorId']]) => this.apiToursService
      .addFavouriteTour({tourId, visitorId})
      .pipe(
        map(() => new ToggleFavouriteTour()),
        catchError(err => of(new ShowMessage({module: 'Tour', message: handleError(err)})))
      ))
  );

  @Effect({dispatch: false})
  updateTourRedirect = this.actions$.pipe(
    ofType(UPDATE_TOUR_SUCCESS),
    tap(() => this.router.navigate(['/tours']))
  );

  constructor(
    private actions$: Actions,
    private apiToursService: ApiToursService,
    private toursService: ToursService,
    private router: Router,
    private store: Store<AppState>
  ) {
  }
}
