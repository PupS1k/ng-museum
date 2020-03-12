import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {Exhibit} from '../models/exhibit.model';
import {
  FETCH_EXHIBIT_SUCCESS,
  FetchExhibitStart,
} from '../store/exhibit.actions';

import {AppState} from '../../app.reducer';
import {take} from 'rxjs/operators';
import {Actions, ofType} from '@ngrx/effects';


@Injectable()
export class ExhibitResolver implements Resolve<Observable<Exhibit>> {
  constructor(private store: Store<AppState>, private actions$: Actions) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const id = +route.params.id;
    this.store.dispatch(new FetchExhibitStart(id));
    return this.actions$.pipe(
      ofType(FETCH_EXHIBIT_SUCCESS),
      take(1)
    );
  }
}
