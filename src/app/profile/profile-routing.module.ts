import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProfileComponent} from './components/profile/profile.component';


const profileRoutes: Routes = [
  {path: '', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRouting {}
