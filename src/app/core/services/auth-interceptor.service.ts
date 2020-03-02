import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {Observable} from 'rxjs';

import { AuthService } from './auth.service';
import {UserData} from '../../auth/models/user-data.model';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(public authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userData: UserData = JSON.parse(localStorage.getItem('userData'));

    const token = this.authService.getToken(userData);

    const headers = {
      Authorization: token ? `Bearer ${token}` : 'my-auth-token'
    };

    request = request.clone({
      setHeaders: headers
    });
    return next.handle(request);
  }
}
