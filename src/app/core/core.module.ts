import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from './services/auth-interceptor.service';
import {AuthService} from './services/auth.service';
import {AdminGuard} from './services/admin-guard.service';
import {GuideGuard} from './services/guide-guard.service';
import {AuthGuard} from './services/auth-guard.service';
import {RoleDirective} from './directives/role.directive';


@NgModule({
  declarations: [
    RoleDirective
  ],
  exports: [
    RoleDirective
  ],
  providers: [
    AuthService,
    AdminGuard,
    GuideGuard,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ]
})
export class CoreModule {}
