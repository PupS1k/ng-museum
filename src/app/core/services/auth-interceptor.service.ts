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


@Injectable({providedIn: 'root'})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(public authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userData: UserData = JSON.parse(localStorage.getItem('userData'));

    const token = userData ? this.authService.getToken(userData) : '';

    const basicAuth = request.headers.get('Authorization');

    if (!basicAuth) {
      request = request.clone({
        setHeaders: {
          Authorization: token ? `Bearer ${token}` : 'my-auth-token'
        }
      });
    }

    return next.handle(request);
  }
}
