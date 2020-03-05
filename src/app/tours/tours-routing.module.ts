import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ToursResolver} from './service/tours-resolver.service';
import {TourResolver} from './service/tour-resolver.service';
import {TourDetailsComponent} from './components/tour-details/tour-details.component';
import {TourEditComponent} from './components/tour-edit/tour-edit.component';
import {ToursListComponent} from './components/tours-list/tours-list.component';
import {TourComponent} from './components/tour/tour.component';

const toursRoutes: Routes = [
  {path: '', component: ToursListComponent, resolve: {tours: ToursResolver}},
  {
    path: ':id', component: TourComponent, resolve: {tour: TourResolver}, children: [
      {path: '', component: TourDetailsComponent},
      {path: 'edit', component: TourEditComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(toursRoutes)],
  exports: [RouterModule]
})

export class ToursRouting {

}
