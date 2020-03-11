import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

import {Tour} from '../models/tour.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {Actions, ofType} from '@ngrx/effects';
import {selectTours} from '../store/tour.selectors';
import {switchMap, take} from 'rxjs/operators';
import {FETCH_TOURS_SUCCESS, FetchToursStart} from '../store/tour.actions';



@Injectable()
export class ToursResolver implements Resolve<Observable<Tour[]>> {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.store.select(selectTours).pipe(
      take(1),
      switchMap(tours => {
        if (tours.length === 0) {
          this.store.dispatch(new FetchToursStart());
          return this.actions$.pipe(
            ofType(FETCH_TOURS_SUCCESS),
            take(1)
          );
        } else {
          return of(tours);
        }
      })
    );
  }
}
