import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {ExhibitListComponent} from './components/exhibit-list/exhibit-list.component';
import {ExhibitListPresentationComponent} from './components/exhibit-list-presentation/exhibit-list-presentation.component';
import {ExhibitCardComponent} from './components/exhibit-card/exhibit-card.component';
import {ExhibitItemComponent} from './components/exhibit-item/exhibit-item.component';
import {RouterModule} from '@angular/router';
import {ExhibitsResolver} from './services/exhibits-resolver.service';
import {ToursSharedModule} from '../tours/tours-shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
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
    ExhibitsResolver
  ],
})
export class ExhibitsSharedModule {}
