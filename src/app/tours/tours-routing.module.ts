import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TourDetailsSmartComponent} from './components/tour-details/tour-details-smart.component';
import {TourEditSmartComponent} from './components/tour-edit/tour-edit-smart.component';
import {ToursListSmartComponent} from './components/tours-list/tours-list-smart.component';
import {TourComponent} from './components/tour/tour.component';
import {TourGuard} from './service/tour-guard.service';
import {ToursGuard} from './service/tours-guard.service';

const toursRoutes: Routes = [
  {path: '', component: ToursListSmartComponent, canActivate: [ToursGuard]},
  {
    path: ':id', component: TourComponent, canActivate: [TourGuard], children: [
      {path: '', component: TourDetailsSmartComponent},
      {path: 'edit', component: TourEditSmartComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(toursRoutes)]
})

export class ToursRouting {

}
