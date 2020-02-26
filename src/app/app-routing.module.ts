import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ExhibitsComponent} from './exhibits/components/exhibits.component';
import {LoginComponent} from './auth/components/login/login.component';
import {SignUpComponent} from './auth/components/sign-up/sign-up.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'exhibits', component: ExhibitsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'about', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
