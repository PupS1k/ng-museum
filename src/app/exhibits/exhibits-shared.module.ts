import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';

import {ExhibitListSmartComponent} from './components/exhibit-list/exhibit-list-smart.component';
import {ExhibitListPresentationComponent} from './components/exhibit-list/exhibit-list-presentation.component';
import {ExhibitCardSmartComponent} from './components/exhibit-card/exhibit-card-smart.component';
import {ExhibitItemSmartComponent} from './components/exhibit-item/exhibit-item-smart.component';
import {ExhibitEffects} from './store/exhibit.effects';
import {ExhibitsGuard} from './services/exhibits-guard.service';
import {ExhibitCardPresentationComponent} from './components/exhibit-card/exhibit-card-presentation.component';
import {ExhibitItemPresentationComponent} from './components/exhibit-item/exhibit-item-presentation.component';
import {ApiExhibitsService} from './services/api-exhibits.service';
import {RouterModule} from '@angular/router';
import {DisplayExhibitCardsPipe} from './pipes/display-exhibit-cards.pipe';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([ExhibitEffects])
  ],
  declarations: [
    ExhibitListSmartComponent,
    ExhibitListPresentationComponent,
    ExhibitCardSmartComponent,
    ExhibitItemSmartComponent,
    ExhibitCardPresentationComponent,
    ExhibitItemPresentationComponent,
    DisplayExhibitCardsPipe
  ],
  exports: [
    ExhibitListSmartComponent,
    ExhibitListPresentationComponent,
    ExhibitCardSmartComponent,
    ExhibitItemSmartComponent,
    ExhibitCardPresentationComponent,
    ExhibitItemPresentationComponent,
  ],
  providers: [
    ExhibitsGuard,
    ApiExhibitsService
  ],
})
export class ExhibitsSharedModule {}
