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
import {GuidesModule} from '../guides/guides.module';
import {VisitorsModule} from '../visitors/visitors.module';
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
        GuidesModule,
        VisitorsModule
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
