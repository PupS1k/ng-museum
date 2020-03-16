import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {LoginPresentationComponent} from './components/login-presentation/login-presentation.component';
import {RouterModule} from '@angular/router';
import {AuthRouting} from './auth-routing.module';
import {ExhibitsSharedModule} from '../exhibits/exhibits-shared.module';

import {VisitorsSharedModule} from '../visitors/visitors-shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AuthRouting,
    ExhibitsSharedModule,
    VisitorsSharedModule
  ],
  declarations: [
    LoginComponent,
    SignUpComponent,
    LoginPresentationComponent
  ]
})

export class AuthModule {}
