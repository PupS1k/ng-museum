import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {Guide} from '../models/guide.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {FETCH_GUIDE_SUCCESS, FetchGuideStart} from '../store/guide.actions';
import {take} from 'rxjs/operators';
import {Actions, ofType} from '@ngrx/effects';



@Injectable()
export class GuideResolver implements Resolve<Observable<Guide>> {
  constructor(private store: Store<AppState>, private actions$: Actions) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const id = +route.params.id;
    this.store.dispatch(new FetchGuideStart(id));
    return this.actions$.pipe(
      ofType(FETCH_GUIDE_SUCCESS),
      take(1)
    );
  }
}
