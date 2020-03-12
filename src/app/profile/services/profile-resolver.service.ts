import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {switchMap, take} from 'rxjs/operators';
import {Actions, ofType} from '@ngrx/effects';
import {selectProfileMode} from '../store/profile.selectors';
import {FETCH_GUIDE_INFO_SUCCESS, FETCH_VISITOR_INFO_SUCCESS, FetchGuideInfoStart, FetchVisitorInfoStart} from '../store/profile.actions';
import {selectUsername} from '../../auth/store/auth.selectors';


@Injectable()
export class ProfileResolver implements Resolve<Observable<any>> {
  constructor(private store: Store<AppState>, private actions$: Actions) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.store.pipe(
      take(1),
      switchMap((store) => {
        if (selectProfileMode(store) === 'visitor') {
          this.store.dispatch(new FetchVisitorInfoStart(selectUsername(store)));
          return this.actions$.pipe(
            ofType(FETCH_VISITOR_INFO_SUCCESS),
            take(1)
          );
        } else {
          this.store.dispatch(new FetchGuideInfoStart(selectUsername(store)));
          return this.actions$.pipe(
            ofType(FETCH_GUIDE_INFO_SUCCESS),
            take(1)
          );
        }
      })
    );
  }
}
