import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {Actions, ofType} from '@ngrx/effects';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {selectProfileMode} from '../store/profile.selectors';
import {FETCH_GUIDE_INFO_SUCCESS, FETCH_VISITOR_INFO_SUCCESS, FetchGuideInfoStart, FetchVisitorInfoStart} from '../store/profile.actions';
import {selectUsername} from '../../auth/store/auth.selectors';

@Injectable()
export class ProfileGuard implements CanActivate {
  constructor(private store: Store<AppState>, private actions$: Actions) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.pipe(
      switchMap((store) => {
        if (selectProfileMode(store) === 'visitor') {
          this.store.dispatch(new FetchVisitorInfoStart(selectUsername(store)));
          return this.actions$.pipe(
            ofType(FETCH_VISITOR_INFO_SUCCESS),
            map(action => !!action)
          );
        } else {
          this.store.dispatch(new FetchGuideInfoStart(selectUsername(store)));
          return this.actions$.pipe(
            ofType(FETCH_GUIDE_INFO_SUCCESS),
            map(action => !!action)
          );
        }
      })
    );
  }
}
