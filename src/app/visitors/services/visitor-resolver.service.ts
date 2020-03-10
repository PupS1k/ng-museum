import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {Visitor} from '../models/visitor.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {FetchVisitorStart} from '../store/visitor.actions';


@Injectable()
export class VisitorResolver implements Resolve<Observable<Visitor>> {
  constructor(private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const id = +route.params.id;
    return this.store.dispatch(new FetchVisitorStart(id));
  }
}
