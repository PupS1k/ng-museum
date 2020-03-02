import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ExhibitsRoutingModule} from './exhibits-routing.module';
import {ExhibitsComponent} from './components/exhibits/exhibits.component';
import {ExhibitDetailsComponent} from './components/exhibit-details/exhibit-details.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ExhibitsSharedModule} from './exhibits-shared.module';
import {SharedModule} from '../shared/shared.module';
import {ExhibitEditComponent} from './components/exhibit-edit/exhibit-edit.component';
import {ExhibitEditPresentationComponent} from './components/exhibit-edit-presentation/exhibit-edit-presentation.component';
import {ExhibitComponent} from './components/exhibit/exhibit.component';
import {ToursSharedModule} from '../tours/tours-shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ExhibitsRoutingModule,
    ExhibitsSharedModule,
    ToursSharedModule,
    SharedModule
  ],
  declarations: [
    ExhibitsComponent,
    ExhibitDetailsComponent,
    ExhibitEditComponent,
    ExhibitEditPresentationComponent,
    ExhibitComponent
  ]
})
export class ExhibitsModule {
}
