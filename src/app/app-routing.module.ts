import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ExhibitsResolverService} from './exhibits-shared/exhibits-resolver.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, resolve: {exhibits: ExhibitsResolverService}},
  {path: 'exhibits',  loadChildren: () => import('./exhibits/exhibits.module').then(m => m.ExhibitsModule) },
  {path: 'auth',  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes,  {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
