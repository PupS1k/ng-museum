import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {Visitor} from '../models/visitor.model';
import {take} from 'rxjs/operators';
import {Actions, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {FETCH_VISITORS_SUCCESS, FetchVisitorsStart} from '../store/visitor.actions';


@Injectable()
export class VisitorsResolver implements Resolve<Observable<Visitor[]>> {
  constructor(private store: Store<AppState>, private actions$: Actions) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.store.dispatch(new FetchVisitorsStart());
    return this.actions$.pipe(
      ofType(FETCH_VISITORS_SUCCESS),
      take(1)
    );
  }

}
