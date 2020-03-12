import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {
  FETCH_GUIDE_INFO_START, FETCH_GUIDE_INFO_SUCCESS,
  FETCH_VISITOR_INFO_START, FETCH_VISITOR_INFO_SUCCESS,
  FetchGuideInfoStart,
  FetchGuideInfoSuccess,
  FetchVisitorInfoStart,
  FetchVisitorInfoSuccess,
} from './profile.actions';
import {Guide} from '../../guides/models/guide.model';
import {Visitor} from '../../visitors/models/visitor.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {ChangeUsername} from '../../auth/store/auth.actions';
import {UserData} from '../../auth/models/user-data.model';
import {CatchMessageAlert} from '../../layout/store/layout.actions';
import {handleError} from '../../layout/utils';


@Injectable()
export class ProfileEffects {
  @Effect()
  fetchUserInfo = this.actions$.pipe(
    ofType(FETCH_VISITOR_INFO_START),
    switchMap((fetchVisitorInfo: FetchVisitorInfoStart) => this.http.post<Visitor>(
      'visitor/visitors/getByUsername',
      JSON.stringify(fetchVisitorInfo.payload),
      {headers: {'Content-Type': 'application/json'}}
    )
      .pipe(
        map(userInfo => new FetchVisitorInfoSuccess(userInfo)),
        catchError(err => of(new CatchMessageAlert({module: 'Profile', message: handleError(err)})))
      ))
  );

  @Effect()
  fetchGuideInfo = this.actions$.pipe(
    ofType(FETCH_GUIDE_INFO_START),
    switchMap((fetchGuideInfo: FetchGuideInfoStart) => this.http.post<Guide>(
      'guide/guides/getByUsername',
      JSON.stringify(fetchGuideInfo.payload),
      {headers: {'Content-Type': 'application/json'}}
    )
      .pipe(
        map(userInfo => new FetchGuideInfoSuccess(userInfo)),
        catchError(err => of(new CatchMessageAlert({module: 'Profile', message: handleError(err)})))
      ))
  );

  @Effect({dispatch: false})
  updateVisitorInfo = this.actions$.pipe(
    ofType(FETCH_VISITOR_INFO_SUCCESS),
    map((fetchVisitorInfo: FetchVisitorInfoSuccess) => this.updateUserData(fetchVisitorInfo.payload))
  );

  @Effect({dispatch: false})
  updateGuideInfo = this.actions$.pipe(
    ofType(FETCH_GUIDE_INFO_SUCCESS),
    tap((fetchGuideInfo: FetchGuideInfoSuccess) => this.updateUserData(fetchGuideInfo.payload))
  );


  updateUserData(userInfo) {
    const userData: UserData = JSON.parse(localStorage.getItem('userData'));
    if (userData.name !== userInfo.username) {
      localStorage.setItem('userData', JSON.stringify({...userData, name: userInfo.username}));
      this.store.dispatch(new ChangeUsername(userInfo.username));
    }
  }

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<AppState>
  ) {
  }
}
