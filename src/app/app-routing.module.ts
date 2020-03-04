import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/services/auth-guard.service';
import {AdminGuard} from './core/services/admin-guard.service';
import {GuideGuard} from './core/services/guide-guard.service';
import {NotFoundComponent} from './layout/components/not-found/not-found.component';

const appRoutes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'exhibits', loadChildren: () => import('./exhibits/exhibits.module').then(m => m.ExhibitsModule)},
  {
    path: 'tours',
    canActivate: [AuthGuard],
    loadChildren: () => import('./tours/tours.module').then(m => m.ToursModule)
  },
  {
    path: 'visitors',
    canActivate: [AuthGuard, GuideGuard],
    loadChildren: () => import('./visitors/visitors.module').then(m => m.VisitorsModule)
  },
  {
    path: 'guides',
    canActivate: [AuthGuard, AdminGuard],
    loadChildren: () => import('./guides/guides.module').then(m => m.GuidesModule)
  },
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: '**', redirectTo: '/notFound', pathMatch: 'full'},
  {path: 'notFound', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
