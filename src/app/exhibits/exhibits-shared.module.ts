import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {RouterModule} from '@angular/router';

import {ExhibitListComponent} from './components/exhibit-list/exhibit-list.component';
import {ExhibitListPresentationComponent} from './components/exhibit-list-presentation/exhibit-list-presentation.component';
import {ExhibitCardComponent} from './components/exhibit-card/exhibit-card.component';
import {ExhibitItemComponent} from './components/exhibit-item/exhibit-item.component';
import {ToursSharedModule} from '../tours/tours-shared.module';
import {ExhibitEffects} from './store/exhibit.effects';
import {ExhibitsGuard} from './services/exhibits-guard.service';
import {ExhibitCardPresentationComponent} from './components/exhibit-card-presentation/exhibit-card-presentation.component';
import {ExhibitItemPresentationComponent} from './components/exhibit-item-presentation/exhibit-item-presentation.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([ExhibitEffects]),
    ToursSharedModule,
  ],
  declarations: [
    ExhibitListComponent,
    ExhibitListPresentationComponent,
    ExhibitCardComponent,
    ExhibitItemComponent,
    ExhibitCardPresentationComponent,
    ExhibitItemPresentationComponent,
  ],
  exports: [
    ExhibitListComponent,
    ExhibitListPresentationComponent,
    ExhibitCardComponent,
    ExhibitItemComponent
  ],
  providers: [
    ExhibitsGuard
  ],
})
export class ExhibitsSharedModule {}
