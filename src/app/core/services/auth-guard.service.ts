import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {AuthService} from './auth.service';
import {UserData} from '../models/user-data.model';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const userData: UserData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
      if (!!this.authService.checkTokenExp(userData)) {
        return true;
      }
    }

    this.router.navigate(['/notFound']);
    return false;
  }
}
