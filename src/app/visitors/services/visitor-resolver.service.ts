import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {Visitor} from '../models/visitor.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {FETCH_VISITOR_SUCCESS, FetchVisitorStart} from '../store/visitor.actions';
import {take} from 'rxjs/operators';
import {Actions, ofType} from '@ngrx/effects';


@Injectable()
export class VisitorResolver implements Resolve<Observable<Visitor>> {
  constructor(private store: Store<AppState>, private actions$: Actions) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const id = +route.params.id;
    this.store.dispatch(new FetchVisitorStart(id));
    return this.actions$.pipe(
      ofType(FETCH_VISITOR_SUCCESS),
      take(1)
    );
  }
}
