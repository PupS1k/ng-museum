import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {Actions, ofType} from '@ngrx/effects';

import {AppState} from '../../app.reducer';
import {FETCH_EXHIBIT_SUCCESS, FetchExhibitStart} from '../store/exhibit.actions';


@Injectable()
export class ExhibitGuard implements CanActivate {
  constructor(private store: Store<AppState>, private actions$: Actions) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const id = +route.params.id;
    this.store.dispatch(new FetchExhibitStart(id));
    return this.actions$.pipe(
      ofType(FETCH_EXHIBIT_SUCCESS),
      map(action => !!action)
    );
  }
}
