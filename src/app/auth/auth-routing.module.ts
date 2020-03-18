import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';


const authRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)]
})

export class AuthRouting {}
