import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {LoginPresentationComponent} from './components/login-presentation/login-presentation.component';
import {CreateUserPresentationComponent} from './components/create-user-presentation/create-user-presentation.component';
import {RouterModule} from '@angular/router';
import {AuthRouting} from './auth-routing.module';
import {ExhibitsSharedModule} from '../exhibits/exhibits-shared.module';
import {AuthSharedModule} from './auth-shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    AuthRouting,
    ExhibitsSharedModule,
    AuthSharedModule
  ],
  declarations: [
    LoginComponent,
    SignUpComponent,
    LoginPresentationComponent,
  ]
})

export class AuthModule {}
