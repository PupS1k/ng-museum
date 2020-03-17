import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {Actions, ofType} from '@ngrx/effects';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {
  FETCH_DATA_TOUR_SUCCESS,
  FetchTourStart
} from '../store/tour.actions';

@Injectable()
export class TourGuard implements CanActivate {
  constructor(private store: Store<AppState>, private actions$: Actions) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const id = +route.params.id;
    this.store.dispatch(new FetchTourStart(id));
    return this.actions$.pipe(
      ofType(FETCH_DATA_TOUR_SUCCESS),
      map(action => !!action)
    );
  }
}
