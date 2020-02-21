// import {Injectable} from '@angular/core';
// import {HttpInterceptor, HttpRequest, HttpHandler, HttpParams, HttpHeaders} from '@angular/common/http';
// import {exhaustMap, take} from 'rxjs/operators';
// import {LoginService} from './login.service';
//
// @Injectable()
// export class LoginInterceptorService implements HttpInterceptor {
//   constructor(private loginService: LoginService) {
//   }
//
//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     return this.loginService.user.pipe(
//       take(1),
//       exhaustMap(user => {
//         const modifiedReq = req.clone({headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})});
//         // if (!user) {
//         //   return next.handle(modifiedReq);
//         // }
//         // const modifiedReq = req.clone({params: new HttpParams().set('access_token', user.token)});
//         return next.handle(modifiedReq);
//       })
//     );
//   }
// }
