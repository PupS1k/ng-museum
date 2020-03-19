import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {LoginSmartComponent} from './components/login/login-smart.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {LoginPresentationComponent} from './components/login/login-presentation.component';
import {AuthRouting} from './auth-routing.module';
import {VisitorsSharedModule} from '../visitors/visitors-shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRouting,
    VisitorsSharedModule
  ],
  declarations: [
    LoginSmartComponent,
    SignUpComponent,
    LoginPresentationComponent
  ]
})

export class AuthModule {}
