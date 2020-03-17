import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './services/auth-interceptor.service';
import {AuthService} from './services/auth.service';
import {AdminGuard} from './services/admin-guard.service';
import {GuideGuard} from './services/guide-guard.service';
import {AuthGuard} from './services/auth-guard.service';
import {UserService} from './services/user.service';
import {LoaderInterceptor} from './services/loader-interceptor.service';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from '../auth/store/auth.effects';
import {ProfileEffects} from '../profile/store/profile.effects';


@NgModule({
  imports: [EffectsModule.forFeature([AuthEffects, ProfileEffects])],
  providers: [
    AuthService,
    AdminGuard,
    GuideGuard,
    AuthGuard,
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class CoreModule {}
