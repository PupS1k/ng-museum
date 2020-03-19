import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';

import {TourItemSmartComponent} from './components/tour-item/tour-item-smart.component';
import {ToursListPresentationComponent} from './components/tours-list/tours-list-presentation.component';
import {TourEffects} from './store/tour.effects';
import {TourCardSmartComponent} from './components/tour-card/tour-card-smart.component';
import {TourItemPresentationComponent} from './components/tour-item/tour-item-presentation.component';
import {TourCardPresentationComponent} from './components/tour-card/tour-card-presentation.component';
import {ApiToursService} from './service/api-tours.service';
import {ToursService} from './service/tours.service';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    EffectsModule.forFeature([TourEffects])
  ],
  declarations: [
    ToursListPresentationComponent,
    TourItemSmartComponent,
    TourCardSmartComponent,
    TourItemPresentationComponent,
    TourCardPresentationComponent
  ],
  exports: [
    ToursListPresentationComponent,
    TourItemSmartComponent,
    TourCardSmartComponent,
    TourItemPresentationComponent,
    TourCardPresentationComponent
  ],
  providers: [
    ApiToursService,
    ToursService
  ]
})
export class ToursSharedModule {}

