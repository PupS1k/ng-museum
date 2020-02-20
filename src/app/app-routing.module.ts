import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  // {path: 'exhibits', },
  // {path: 'login', },
  // {path: 'signUp', },
  // {path: 'about', }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
