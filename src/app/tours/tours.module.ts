import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ToursRoutingModule} from './tours-routing.module';

import {TourComponent} from './components/tour/tour.component';
import {TourDetailsComponent} from './components/tour-details/tour-details.component';
import {TourEditComponent} from './components/tour-edit/tour-edit.component';
import {ToursComponent} from './components/tours.component';
import {ToursSharedModule} from './tours-shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ToursRoutingModule,
    ToursSharedModule,
    SharedModule
  ],
  declarations: [
    TourComponent,
    TourDetailsComponent,
    TourEditComponent,
    ToursComponent
  ],
  providers: [

  ]
})
export class ToursModule {
}
