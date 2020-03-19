import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ToursRouting} from './tours-routing.module';
import {TourComponent} from './components/tour/tour.component';
import {TourDetailsSmartComponent} from './components/tour-details/tour-details-smart.component';
import {ToursSharedModule} from './tours-shared.module';
import {TourEditPresentationComponent} from './components/tour-edit/tour-edit-presentation.component';
import {TourDetailsPresentationComponent} from './components/tour-details/tour-details-presentation.component';
import {ExhibitsSharedModule} from '../exhibits/exhibits-shared.module';
import {GuidesSharedModule} from '../guides/guides-shared.module';
import {VisitorsSharedModule} from '../visitors/visitors-shared.module';
import {TourGuard} from './service/tour-guard.service';
import {ToursGuard} from './service/tours-guard.service';
import {TourFormSmartComponent} from './components/tour-form/tour-form-smart.component';
import {TourFormPresentationComponent} from './components/tour-form/tour-form-presentation.component';
import {TourEditSmartComponent} from './components/tour-edit/tour-edit-smart.component';
import {ToursListSmartComponent} from './components/tours-list/tours-list-smart.component';


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
    ToursListSmartComponent,
    TourDetailsSmartComponent,
    TourDetailsPresentationComponent,
    TourEditPresentationComponent,
    TourEditSmartComponent,
    TourFormSmartComponent,
    TourFormPresentationComponent
  ],
  providers: [
    TourGuard,
    ToursGuard
  ]
})
export class ToursModule {
}
