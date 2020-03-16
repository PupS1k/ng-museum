import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {VisitorsRouting} from './visitors-routing.module';
import {VisitorsSharedModule} from './visitors-shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    VisitorsRouting,
    VisitorsSharedModule
  ],
})
export class VisitorsModule {}
