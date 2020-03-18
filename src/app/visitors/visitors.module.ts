import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VisitorsRouting} from './visitors-routing.module';
import {VisitorsSharedModule} from './visitors-shared.module';


@NgModule({
  imports: [
    CommonModule,
    VisitorsRouting,
    VisitorsSharedModule
  ],
})
export class VisitorsModule {}
