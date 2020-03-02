import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ToursComponent} from './components/tours.component';
import {ToursResolverService} from './service/tours-resolver.service';
import {TourResolverService} from './service/tour-resolver.service';
import {TourDetailsComponent} from './components/tour-details/tour-details.component';
import {TourEditComponent} from './components/tour-edit/tour-edit.component';
import {ToursListComponent} from './components/tours-list/tours-list.component';

const toursRoutes: Routes = [
  {path: '', component: ToursComponent, children: [
      {path: '', component: ToursListComponent, resolve: {tours: ToursResolverService}},
      {path: ':id', component: ToursComponent, resolve: {tour: TourResolverService}, children: [
          {path: '', component: TourDetailsComponent},
          {path: 'edit', component: TourEditComponent},
        ]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(toursRoutes)],
  exports: [RouterModule]
})

export class ToursRoutingModule {

}
