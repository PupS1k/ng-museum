import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ExhibitsComponent} from './exhibits/components/exhibits.component';
import {LoginComponent} from './login/components/login.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'exhibits', component: ExhibitsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: AppComponent},
  {path: 'about', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
