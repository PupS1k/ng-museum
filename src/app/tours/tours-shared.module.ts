import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ToursListComponent} from './components/tours-list/tours-list.component';
import {TourItemComponent} from './components/tour-item/tour-item.component';
import {ToursListPresentationComponent} from './components/tours-list-presentation/tours-list-presentation.component';
import {EffectsModule} from '@ngrx/effects';
import {TourEffects} from './store/tour.effects';
import {TourCardComponent} from './components/tour-card/tour-card.component';
import {DisplayExhibitCardsPipe} from './pipes/display-exhibit-cards.pipe';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    EffectsModule.forFeature([TourEffects])
  ],
  declarations: [
    ToursListComponent,
    ToursListPresentationComponent,
    TourItemComponent,
    TourCardComponent,
    DisplayExhibitCardsPipe
  ],
  exports: [
    ToursListComponent,
    ToursListPresentationComponent,
    TourItemComponent,
    TourCardComponent,
    DisplayExhibitCardsPipe
  ]
})
export class ToursSharedModule {}

