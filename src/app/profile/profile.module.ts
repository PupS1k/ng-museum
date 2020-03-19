import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ProfileRouting} from './profile-routing.module';
import {VisitorsSharedModule} from '../visitors/visitors-shared.module';
import {ProfileSmartComponent} from './components/profile/profile-smart.component';
import {ToursSharedModule} from '../tours/tours-shared.module';
import {GuidesSharedModule} from '../guides/guides-shared.module';
import {ProfilePresentationComponent} from './components/profile/profile-presentation.component';
import {ProfileVisitorEditComponent} from './components/profile-visitor-edit/profile-visitor-edit.component';
import {ProfileGuideEditComponent} from './components/profile-guide-edit/profile-guide-edit.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProfileRouting,
    VisitorsSharedModule,
    GuidesSharedModule,
    ToursSharedModule
  ],
  declarations: [
    ProfileSmartComponent,
    ProfilePresentationComponent,
    ProfileVisitorEditComponent,
    ProfileGuideEditComponent
  ],
})
export class ProfileModule {
}
