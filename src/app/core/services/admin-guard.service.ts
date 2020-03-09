import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';

import {AppState} from '../../app.reducer';


@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select(store => store.auth.isAdmin)
      .pipe(map(isAdmin => {
      if (isAdmin) {
        return true;
      }

      this.router.navigate(['/notFound']);
      return false;
    }));
  }
}
