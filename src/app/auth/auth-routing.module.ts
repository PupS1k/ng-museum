import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginSmartComponent} from './components/login/login-smart.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';


const authRoutes: Routes = [
  {path: 'login', component: LoginSmartComponent},
  {path: 'signUp', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)]
})

export class AuthRouting {}
