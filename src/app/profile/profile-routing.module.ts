import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProfileSmartComponent} from './components/profile/profile-smart.component';
import {ProfileGuard} from './services/profile-guard.service';


const profileRoutes: Routes = [
  {path: '', component: ProfileSmartComponent, canActivate: [ProfileGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
})
export class ProfileRouting {}
