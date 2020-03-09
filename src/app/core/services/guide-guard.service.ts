import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';

import {AppState} from '../../app.reducer';

@Injectable()
export class GuideGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select(store => store.auth.isGuide)
      .pipe(map(isGuide => {
        if (isGuide) {
          return true;
        }

        this.router.navigate(['/notFound']);
        return false;
      }));
  }
}
