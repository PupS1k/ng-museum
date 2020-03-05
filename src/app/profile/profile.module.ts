import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProfileRouting} from './profile-routing.module';
import {VisitorDataResolver} from './services/visitor-data-resolver.service';
import {GuideDataResolver} from './services/guide-data-resolver.service';
import {VisitorsSharedModule} from '../visitors/visitors-shared.module';
import {GuidesSharedModule} from '../guides/guides-shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProfileRouting,
    VisitorsSharedModule,
    GuidesSharedModule
  ],
  providers: [
    VisitorDataResolver,
    GuideDataResolver
  ]
})
export class ProfileModule {
}
