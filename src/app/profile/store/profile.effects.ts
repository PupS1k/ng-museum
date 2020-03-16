import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {
  FETCH_GUIDE_INFO_START,
  FETCH_VISITOR_INFO_START,
  FetchGuideInfoStart,
  FetchGuideInfoSuccess,
  FetchVisitorInfoStart,
  FetchVisitorInfoSuccess,
} from './profile.actions';
import {Guide} from '../../guides/models/guide.model';
import {Visitor} from '../../visitors/models/visitor.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {ShowMessage} from '../../layout/store/layout.actions';
import {handleError} from '../../layout/utils';
import {selectUsername} from '../../auth/store/auth.selectors';


@Injectable()
export class ProfileEffects {
  @Effect()
  fetchVisitorInfo = this.actions$.pipe(
    ofType(FETCH_VISITOR_INFO_START),
    withLatestFrom(this.store),
    switchMap(([fetchVisitorInfo, state]: [FetchVisitorInfoStart, AppState]) => this.http.post<Visitor>(
      'visitor/visitors/getByUsername',
      JSON.stringify(fetchVisitorInfo.payload || selectUsername(state)),
      {headers: {'Content-Type': 'application/json'}}
    )
      .pipe(
        map(userInfo => new FetchVisitorInfoSuccess(userInfo)),
        catchError(err => of(new ShowMessage({module: 'Profile', message: handleError(err)})))
      ))
  );

  @Effect()
  fetchGuideInfo = this.actions$.pipe(
    ofType(FETCH_GUIDE_INFO_START),
    withLatestFrom(this.store),
    switchMap(([fetchGuideInfo, state]: [FetchGuideInfoStart, AppState]) => this.http.post<Guide>(
      'guide/guides/getByUsername',
      JSON.stringify(fetchGuideInfo.payload || selectUsername(state)),
      {headers: {'Content-Type': 'application/json'}}
    )
      .pipe(
        map(userInfo => new FetchGuideInfoSuccess(userInfo)),
        catchError(err => of(new ShowMessage({module: 'Profile', message: handleError(err)})))
      ))
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<AppState>
  ) {
  }
}
