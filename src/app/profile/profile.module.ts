import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProfileRouting} from './profile-routing.module';
import {VisitorsSharedModule} from '../visitors/visitors-shared.module';
import {GuidesSharedModule} from '../guides/guides-shared.module';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthSharedModule} from '../auth/auth-shared.module';
import {ToursSharedModule} from '../tours/tours-shared.module';
import {ProfileResolver} from './services/profile-resolver.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProfileRouting,
    VisitorsSharedModule,
    GuidesSharedModule,
    AuthSharedModule,
    ToursSharedModule,
  ],
  declarations: [ProfileComponent],
  providers: [ProfileResolver]
})
export class ProfileModule {
}
