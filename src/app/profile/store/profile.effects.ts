import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';

import {
  DELETE_FAVOURITE_TOUR_START, DeleteFavouriteTourStart, DeleteFavouriteTourSuccess,
  FETCH_GUIDE_INFO_START,
  FETCH_VISITOR_INFO_START,
  FetchGuideInfoStart,
  FetchGuideInfoSuccess,
  FetchVisitorInfoStart,
  FetchVisitorInfoSuccess,
} from './profile.actions';
import {Visitor} from '../../visitors/models/visitor.model';
import {AppState} from '../../app.reducer';
import {ShowMessage} from '../../layout/store/layout.actions';
import {handleError} from '../../layout/utils';
import {selectUsername} from '../../auth/store/auth.selectors';
import {selectUserVisitorId} from './profile.selectors';
import {ApiProfileService} from '../services/api-profile.service';
import {Tour} from '../../tours/models/tour.model';


@Injectable()
export class ProfileEffects {
  @Effect()
  fetchUserVisitorInfo = this.actions$.pipe(
    ofType<FetchVisitorInfoStart>(FETCH_VISITOR_INFO_START),
    map(action => action.payload),
    withLatestFrom(this.store.select(selectUsername)),
    switchMap(([payload, username]: [string, string]) => this.apiProfileService
      .getUserVisitorInfo(payload || username)
      .pipe(
        map(userInfo => new FetchVisitorInfoSuccess(userInfo)),
        catchError(err => of(new ShowMessage({module: 'Profile', message: handleError(err)})))
      ))
  );

  @Effect()
  fetchUserGuideInfo = this.actions$.pipe(
    ofType<FetchGuideInfoStart>(FETCH_GUIDE_INFO_START),
    map(action => action.payload),
    withLatestFrom(this.store.select(selectUsername)),
    switchMap(([payload, username]: [string, string]) => this.apiProfileService
      .getUserGuideInfo(payload || username)
      .pipe(
        map(userInfo => new FetchGuideInfoSuccess(userInfo)),
        catchError(err => of(new ShowMessage({module: 'Profile', message: handleError(err)})))
      ))
  );

  @Effect()
  deleteFavouriteTour = this.actions$.pipe(
    ofType<DeleteFavouriteTourStart>(DELETE_FAVOURITE_TOUR_START),
    map(action => action.payload),
    withLatestFrom(this.store.select(selectUserVisitorId)),
    switchMap(([tourId, visitorId]: [Tour['tourId'], Visitor['visitorId']]) => this.apiProfileService
      .deleteFavouriteTour({tourId, visitorId})
      .pipe(
        map(() => new DeleteFavouriteTourSuccess(tourId)),
        catchError(err => of(new ShowMessage({module: 'Profile', message: handleError(err)})))
      ))
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private apiProfileService: ApiProfileService,
    private store: Store<AppState>
  ) {
  }
}
