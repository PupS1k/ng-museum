import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExhibitListComponent} from './components/exhibit-list/exhibit-list.component';
import {ExhibitListPresentationComponent} from './components/exhibit-list-presentation/exhibit-list-presentation.component';
import {ExhibitCardComponent} from './components/exhibit-card/exhibit-card.component';
import {ExhibitItemComponent} from './components/exhibit-item/exhibit-item.component';
import {RouterModule} from '@angular/router';
import {ToursSharedModule} from '../tours/tours-shared.module';
import {EffectsModule} from '@ngrx/effects';
import {ExhibitEffects} from './store/exhibit.effects';
import {ExhibitsGuard} from './services/exhibits-guard.service';


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
