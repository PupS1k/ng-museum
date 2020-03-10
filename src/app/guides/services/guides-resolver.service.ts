import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

import {Guide} from '../models/guide.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {switchMap, take} from 'rxjs/operators';
import {Actions, ofType} from '@ngrx/effects';
import {FETCH_GUIDES_START, FETCH_GUIDES_SUCCESS, FetchGuidesStart} from '../store/guide.actions';



@Injectable()
export class GuidesResolver implements Resolve<Observable<Guide[]>> {
  constructor(private store: Store<AppState>, private actions$: Actions) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.store.select(store => store.guides.guides).pipe(
      take(1),
      switchMap(guides => {
        if (guides.length === 0) {
          this.store.dispatch(new FetchGuidesStart());
          return this.actions$.pipe(
            ofType(FETCH_GUIDES_SUCCESS),
            take(1)
          );
        } else {
          return of(guides);
        }
      })
    );
  }

}
