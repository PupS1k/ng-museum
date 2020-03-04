import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';

@Injectable()
export class GuideGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isGuide$.pipe(map(isGuide => {
      if (isGuide) {
        return true;
      }

      this.router.navigate(['/notFound']);
      return false;
    }));
  }
}
