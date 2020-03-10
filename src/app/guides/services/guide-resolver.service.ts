import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {Guide} from '../models/guide.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {FetchGuideStart} from '../store/guide.actions';



@Injectable()
export class GuideResolver implements Resolve<Observable<Guide>> {
  constructor(private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const id = +route.params.id;

    return this.store.dispatch(new FetchGuideStart(id));
  }

}
