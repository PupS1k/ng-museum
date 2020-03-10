import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {Exhibit} from '../models/exhibit.model';
import {
  FetchExhibitStart,
} from '../store/exhibit.actions';

import {AppState} from '../../app.reducer';


@Injectable()
export class ExhibitResolver implements Resolve<Observable<Exhibit>> {
  constructor(private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const id = +route.params.id;

    return this.store.dispatch(new FetchExhibitStart(id));
  }
}
