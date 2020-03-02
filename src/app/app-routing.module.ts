import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '',  loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {path: 'exhibits',  loadChildren: () => import('./exhibits/exhibits.module').then(m => m.ExhibitsModule) },
  {path: 'tours',  loadChildren: () => import('./tours/tours.module').then(m => m.ToursModule) },
  {path: 'visitors',  loadChildren: () => import('./visitors/visitors.module').then(m => m.VisitorsModule) },
  {path: 'auth',  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes,  {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
