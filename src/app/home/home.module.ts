import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ExhibitsSharedModule} from '../exhibits/exhibits-shared.module';
import {HomeComponent} from './components/home/home.component';
import {ExhibitsGuard} from '../exhibits/services/exhibits-guard.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: HomeComponent, canActivate: [ExhibitsGuard]}]),
    ExhibitsSharedModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
