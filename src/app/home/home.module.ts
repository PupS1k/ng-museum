import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ExhibitsSharedModule} from '../exhibits/exhibits-shared.module';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './components/home/home.component';
import {ExhibitsResolver} from '../exhibits/services/exhibits-resolver.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomeComponent, resolve: {exhibits: ExhibitsResolver}}]),
    ExhibitsSharedModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
