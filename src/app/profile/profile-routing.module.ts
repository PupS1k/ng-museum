import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProfileComponent} from './components/profile/profile.component';
import {ProfileGuard} from './services/profile-guard.service';


const profileRoutes: Routes = [
  {path: '', component: ProfileComponent, canActivate: [ProfileGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRouting {}
