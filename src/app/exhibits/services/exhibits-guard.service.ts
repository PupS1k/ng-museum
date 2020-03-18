import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {Actions, ofType} from '@ngrx/effects';

import {AppState} from '../../app.reducer';
import {FETCH_EXHIBITS_SUCCESS, FetchExhibitsStart} from '../store/exhibit.actions';


@Injectable()
export class ExhibitsGuard implements CanActivate {
  constructor(private store: Store<AppState>, private actions$: Actions) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.store.dispatch(new FetchExhibitsStart());
    return this.actions$.pipe(
      ofType(FETCH_EXHIBITS_SUCCESS),
      map(action => !!action)
    );
  }
}
