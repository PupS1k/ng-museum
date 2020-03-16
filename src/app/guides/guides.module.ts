import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {GuidesRouting} from './guides-routing.module';
import {GuidesSharedModule} from './guides-shared.module';


@NgModule({
  imports: [
    CommonModule,
    GuidesRouting,
    RouterModule,
    GuidesSharedModule
  ]
})
export class GuidesModule {}

