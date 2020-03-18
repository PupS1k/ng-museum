import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';

import {AuthInterceptor} from './services/auth-interceptor.service';
import {AuthService} from './services/auth.service';
import {AdminGuard} from './services/admin-guard.service';
import {GuideGuard} from './services/guide-guard.service';
import {AuthGuard} from './services/auth-guard.service';
import {LoaderInterceptor} from './services/loader-interceptor.service';
import {AuthEffects} from '../auth/store/auth.effects';
import {ApiAuthService} from './services/api-auth.service';


@NgModule({
  imports: [EffectsModule.forFeature([AuthEffects])],
  providers: [
    AuthService,
    ApiAuthService,
    AdminGuard,
    GuideGuard,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class CoreModule {}
