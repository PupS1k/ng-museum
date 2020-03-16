import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {Actions, ofType} from '@ngrx/effects';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FETCH_GUIDES_SUCCESS, FetchGuidesStart} from '../store/guide.actions';
import {Injectable} from '@angular/core';

@Injectable()
export class GuidesGuard implements CanActivate {
  constructor(private store: Store<AppState>, private actions$: Actions) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.store.dispatch(new FetchGuidesStart());
    return this.actions$.pipe(
      ofType(FETCH_GUIDES_SUCCESS),
      map(action => !!action)
    );
  }
}
