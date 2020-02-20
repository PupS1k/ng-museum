import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'exhibits', component: AppComponent},
  {path: 'login', component: AppComponent},
  {path: 'signUp', component: AppComponent},
  {path: 'about', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
