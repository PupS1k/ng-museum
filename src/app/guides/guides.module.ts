import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GuidesRouting} from './guides-routing.module';
import {GuidesSharedModule} from './guides-shared.module';


@NgModule({
  imports: [
    CommonModule,
    GuidesRouting,
    GuidesSharedModule
  ]
})
export class GuidesModule {}

