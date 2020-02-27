import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './auth/components/login/login.component';
import {SignUpComponent} from './auth/components/sign-up/sign-up.component';
import {ExhibitsComponent} from './exhibits/components/exhibits.component';
import {ExhibitDetailsComponent} from './exhibits/components/exhibit-details/exhibit-details.component';
import {ExhibitsStartComponent} from './exhibits/components/exhibits-start/exhibits-start.component';
import {ExhibitsResolverService} from './exhibits/services/exhibits-resolver.service';
import {ExhibitResolverService} from './exhibits/services/exhibit-resolver.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, resolve: {exhibits: ExhibitsResolverService}},
  {path: 'exhibits', component: ExhibitsComponent, children: [
      {path: '', component: ExhibitsStartComponent, resolve: {exhibits: ExhibitsResolverService}},
      {path: ':id', component: ExhibitDetailsComponent, resolve: {exhibit: ExhibitResolverService}},
      // {path: 'exhibits/:id/edit', component:},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'about', component: AppComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes,  {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
