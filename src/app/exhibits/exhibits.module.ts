import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ExhibitsRoutingModule} from './exhibits-routing.module';
import {ExhibitsComponent} from './components/exhibits.component';
import {ExhibitDetailsComponent} from './components/exhibit-details/exhibit-details.component';
import {ExhibitsStartComponent} from './components/exhibits-start/exhibits-start.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ExhibitsSharedModule} from '../exhibits-shared/exhibits-shared.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ExhibitsRoutingModule,
    ExhibitsSharedModule,
    SharedModule
  ],
  declarations: [
    ExhibitsComponent,
    ExhibitDetailsComponent,
    ExhibitsStartComponent,
  ]
})
export class ExhibitsModule {}
