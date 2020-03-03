import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {ExhibitListComponent} from './components/exhibit-list/exhibit-list.component';
import {ExhibitListPresentationComponent} from './components/exhibit-list-presentation/exhibit-list-presentation.component';
import {ExhibitCardComponent} from './components/exhibit-card/exhibit-card.component';
import {ExhibitItemComponent} from './components/exhibit-item/exhibit-item.component';
import {RouterModule} from '@angular/router';
import {ExhibitsSharedService} from './services/exhibits-shared.service';
import {ExhibitsService} from './services/exhibits.service';
import {ExhibitsResolverService} from './services/exhibits-resolver.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
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
    ExhibitsSharedService,
    ExhibitsResolverService
  ],
})
export class ExhibitsSharedModule {}
