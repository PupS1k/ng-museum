import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProfileRouting} from './profile-routing.module';
import {VisitorsModule} from '../visitors/visitors.module';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthSharedModule} from '../auth/auth-shared.module';
import {ToursSharedModule} from '../tours/tours-shared.module';
import {ProfileResolver} from './services/profile-resolver.service';
import {GuidesModule} from '../guides/guides.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProfileRouting,
    VisitorsModule,
    GuidesModule,
    AuthSharedModule,
    ToursSharedModule,
  ],
  declarations: [ProfileComponent],
  providers: [ProfileResolver]
})
export class ProfileModule {
}
