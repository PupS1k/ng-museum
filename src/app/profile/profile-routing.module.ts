import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProfileComponent} from './components/profile/profile.component';
import {ProfileResolver} from './services/profile-resolver.service';


const profileRoutes: Routes = [
  {path: '', component: ProfileComponent, resolve: {ProfileResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRouting {}
