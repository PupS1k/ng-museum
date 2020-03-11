import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {Tour} from '../models/tour.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {FETCH_TOUR_SUCCESS, FetchTourStart} from '../store/tour.actions';
import {selectTours} from '../store/tour.selectors';
import {switchMap, take} from 'rxjs/operators';
import {Actions, ofType} from '@ngrx/effects';


@Injectable()
export class TourResolver implements Resolve<Observable<Tour>> {
  constructor(private store: Store<AppState>, private actions$: Actions) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const id = +route.params.id;

    return this.store.select(selectTours).pipe(
      take(1),
      switchMap(() => {
        this.store.dispatch(new FetchTourStart(id));
        return this.actions$.pipe(
          ofType(FETCH_TOUR_SUCCESS),
          take(1)
        );
      })
    );
  }
}
