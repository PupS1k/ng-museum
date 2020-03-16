import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ToursRouting} from './tours-routing.module';

import {TourComponent} from './components/tour/tour.component';
import {TourDetailsComponent} from './components/tour-details/tour-details.component';
import {TourEditComponent} from './components/tour-edit/tour-edit.component';
import {ToursSharedModule} from './tours-shared.module';
import {TourEditPresentationComponent} from './components/tour-edit-presentation/tour-edit-presentation.component';
import {TourDetailsPresentationComponent} from './components/tour-details-presentation/tour-details-presentation.component';
import {ExhibitsSharedModule} from '../exhibits/exhibits-shared.module';
import {GuidesSharedModule} from '../guides/guides-shared.module';
import {VisitorsSharedModule} from '../visitors/visitors-shared.module';
import {TourGuard} from './service/tour-guard.service';
import {ToursGuard} from './service/tours-guard.service';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        ToursRouting,
        ToursSharedModule,
        ExhibitsSharedModule,
      GuidesSharedModule,
        VisitorsSharedModule
    ],
  declarations: [
    TourComponent,
    TourDetailsComponent,
    TourDetailsPresentationComponent,
    TourEditComponent,
    TourEditPresentationComponent,
  ],
  providers: [
    TourGuard,
    ToursGuard
  ]
})
export class ToursModule {
}
