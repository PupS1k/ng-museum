import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ExhibitsRouting} from './exhibits-routing.module';
import {ExhibitsComponent} from './components/exhibits/exhibits.component';
import {ExhibitDetailsComponent} from './components/exhibit-details/exhibit-details.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ExhibitsSharedModule} from './exhibits-shared.module';
import {ExhibitEditComponent} from './components/exhibit-edit/exhibit-edit.component';
import {ExhibitEditPresentationComponent} from './components/exhibit-edit-presentation/exhibit-edit-presentation.component';
import {ExhibitComponent} from './components/exhibit/exhibit.component';
import {ToursSharedModule} from '../tours/tours-shared.module';
import {ExhibitDetailsPresentationComponent} from './components/exhibit-details-presentation/exhibit-details-presentation.component';
import {ExhibitGuard} from './services/exhibit-guard.service';
import {ExhibitFormComponent} from './components/exhibit-form/exhibit-form.component';
import {ExhibitFormPresentationComponent} from './components/exhibit-form-presentation/exhibit-form-presentation.component';


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
    ExhibitDetailsComponent,
    ExhibitEditComponent,
    ExhibitEditPresentationComponent,
    ExhibitComponent,
    ExhibitDetailsPresentationComponent,
    ExhibitFormComponent,
    ExhibitFormPresentationComponent
  ],
  providers: [
    ExhibitGuard,
  ]
})
export class ExhibitsModule {
}
