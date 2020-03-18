import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ExhibitsComponent} from './components/exhibits/exhibits.component';
import {ExhibitDetailsSmartComponent} from './components/exhibit-details/exhibit-details-smart.component';
import {ExhibitsSharedModule} from './exhibits-shared.module';
import {ExhibitEditSmartComponent} from './components/exhibit-edit/exhibit-edit-smart.component';
import {ExhibitEditPresentationComponent} from './components/exhibit-edit/exhibit-edit-presentation.component';
import {ExhibitComponent} from './components/exhibit/exhibit.component';
import {ExhibitDetailsPresentationComponent} from './components/exhibit-details/exhibit-details-presentation.component';
import {ExhibitFormSmartComponent} from './components/exhibit-form/exhibit-form-smart.component';
import {ExhibitFormPresentationComponent} from './components/exhibit-form/exhibit-form-presentation.component';
import {ExhibitsRouting} from './exhibits-routing.module';
import {ExhibitGuard} from './services/exhibit-guard.service';
import {ToursSharedModule} from '../tours/tours-shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ExhibitsRouting,
    ExhibitsSharedModule,
    ToursSharedModule,
  ],
  declarations: [
    ExhibitsComponent,
    ExhibitDetailsSmartComponent,
    ExhibitEditSmartComponent,
    ExhibitEditPresentationComponent,
    ExhibitComponent,
    ExhibitDetailsPresentationComponent,
    ExhibitFormSmartComponent,
    ExhibitFormPresentationComponent
  ],
  providers: [
    ExhibitGuard
  ]
})
export class ExhibitsModule {
}
