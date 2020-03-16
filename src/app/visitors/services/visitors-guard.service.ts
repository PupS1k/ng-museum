import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {Actions, ofType} from '@ngrx/effects';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {FETCH_VISITORS_SUCCESS, FetchVisitorsStart} from '../store/visitor.actions';

@Injectable()
export class VisitorsGuard implements CanActivate {
  constructor(private store: Store<AppState>, private actions$: Actions) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.store.dispatch(new FetchVisitorsStart());
    return this.actions$.pipe(
      ofType(FETCH_VISITORS_SUCCESS),
      map(action => !!action)
    );
  }
}
