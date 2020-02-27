import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {LoginPresentationComponent} from './components/login-presentation/login-presentation.component';
import {SignUpPresentationComponent} from './components/sign-up-presentation/sign-up-presentation.component';
import {RouterModule} from '@angular/router';
import {AuthRoutingModule} from './auth-routing.module';
import {ExhibitsSharedModule} from '../exhibits-shared/exhibits-shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    AuthRoutingModule,
    ExhibitsSharedModule
  ],
  declarations: [
    LoginComponent,
    SignUpComponent,
    LoginPresentationComponent,
    SignUpPresentationComponent
  ]
})

export class AuthModule {}
