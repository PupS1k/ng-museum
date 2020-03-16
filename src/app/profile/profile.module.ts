import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProfileRouting} from './profile-routing.module';
import {VisitorsSharedModule} from '../visitors/visitors-shared.module';
import {ProfileComponent} from './components/profile/profile.component';
import {AuthSharedModule} from '../auth/auth-shared.module';
import {ToursSharedModule} from '../tours/tours-shared.module';
import {ProfileResolver} from './services/profile-resolver.service';
import {GuidesSharedModule} from '../guides/guides-shared.module';
import { ProfilePresentationComponent } from './components/profile-presentation/profile-presentation.component';
import { ProfileVisitorEditComponent } from './components/profile-visitor-edit/profile-visitor-edit.component';
import { ProfileGuideEditComponent } from './components/profile-guide-edit/profile-guide-edit.component';


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
  declarations: [
    ProfileComponent,
    ProfilePresentationComponent,
    ProfileVisitorEditComponent,
    ProfileGuideEditComponent
  ],
  providers: [ProfileResolver]
})
export class ProfileModule {
}
