import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ToursListComponent} from './components/tours-list/tours-list.component';
import {TourItemComponent} from './components/tour-item/tour-item.component';
import {ToursListPresentationComponent} from './components/tours-list-presentation/tours-list-presentation.component';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
    ToursListComponent,
    ToursListPresentationComponent,
    TourItemComponent
  ],
  exports: [
    ToursListComponent,
    ToursListPresentationComponent
  ]
})
export class ToursSharedModule {}
