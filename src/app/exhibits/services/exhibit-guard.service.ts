import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';

import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {FetchExhibitStart} from '../store/exhibit.actions';
import {catchError, switchMap, take, tap} from 'rxjs/operators';


@Injectable()
export class ExhibitGuard implements CanActivate {
  constructor(private store: Store<AppState>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const id = +route.params.id;

    return this.store.pipe(
      tap(() => this.store.dispatch(new FetchExhibitStart(id))),
      take(1),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
