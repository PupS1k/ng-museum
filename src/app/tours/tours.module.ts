import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ToursRoutingModule} from './tours-routing.module';

import {TourComponent} from './components/tour/tour.component';
import {TourDetailsComponent} from './components/tour-details/tour-details.component';
import {TourEditComponent} from './components/tour-edit/tour-edit.component';
import {ToursSharedModule} from './tours-shared.module';
import {TourEditPresentationComponent} from './components/tour-edit-presentation/tour-edit-presentation.component';
import {ToursService} from './service/tours.service';
import {ToursResolverService} from './service/tours-resolver.service';
import {TourResolverService} from './service/tour-resolver.service';
import {TourDetailsPresentationComponent} from './components/tour-details-presentation/tour-details-presentation.component';
import {ExhibitsSharedModule} from '../exhibits/exhibits-shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ToursRoutingModule,
    ToursSharedModule,
    SharedModule,
    ExhibitsSharedModule
  ],
  declarations: [
    TourComponent,
    TourDetailsComponent,
    TourDetailsPresentationComponent,
    TourEditComponent,
    TourEditPresentationComponent,
  ],
  providers: [
    ToursService,
    ToursResolverService,
    TourResolverService
  ]
})
export class ToursModule {
}
