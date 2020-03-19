import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {Actions, ofType} from '@ngrx/effects';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {FETCH_GUIDE_SUCCESS, FetchGuideStart} from '../store/guide.actions';
import {Injectable} from '@angular/core';

@Injectable()
export class GuideGuard implements CanActivate {
  constructor(private store: Store<AppState>, private actions$: Actions) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const id = Number(route.params.id);
    this.store.dispatch(new FetchGuideStart(id));
    return this.actions$.pipe(
      ofType(FETCH_GUIDE_SUCCESS),
      map(action => !!action)
    );
  }
}
