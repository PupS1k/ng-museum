import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TourDetailsComponent} from './components/tour-details/tour-details.component';
import {TourEditComponent} from './components/tour-edit/tour-edit.component';
import {ToursListComponent} from './components/tours-list/tours-list.component';
import {TourComponent} from './components/tour/tour.component';
import {TourGuard} from './service/tour-guard.service';
import {ToursGuard} from './service/tours-guard.service';

const toursRoutes: Routes = [
  {path: '', component: ToursListComponent, canActivate: [ToursGuard]},
  {
    path: ':id', component: TourComponent, canActivate: [TourGuard], children: [
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
