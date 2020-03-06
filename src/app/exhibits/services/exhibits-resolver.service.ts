import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {map, switchMap, take} from 'rxjs/operators';
import {Actions, ofType} from '@ngrx/effects';

import {AppState} from '../../app.reducer';
import {Exhibit} from '../models/exhibit.model';
import {FetchExhibitsStart, FETCH_EXHIBITS_SUCCESS} from '../store/exhibit.actions';


@Injectable()
export class ExhibitsResolver implements Resolve<Observable<Exhibit[]>> {
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.store.select('exhibits').pipe(
      take(1),
      map(exhibitState => exhibitState.exhibits),
      switchMap(exhibits => {
        if (exhibits.length === 0) {
          this.store.dispatch(new FetchExhibitsStart());
          return this.actions$.pipe(
            ofType(FETCH_EXHIBITS_SUCCESS),
            take(1)
          );
        } else {
          return of(exhibits);
        }
      })
    );
  }
}
