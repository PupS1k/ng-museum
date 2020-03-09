import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {GuidesListComponent} from './components/guides-list/guides-list.component';
import {GuidesListPresentationComponent} from './components/guides-list-presentation/guides-list-presentation.component';
import {GuideItemComponent} from './components/guide-item/guide-item.component';
import {GuideItemPresentationComponent} from './components/guide-item-presentation/guide-item-presentation.component';
import {GuidesResolver} from './services/guides-resolver.service';
import {GuidesRouting} from './guides-routing.module';
import {GuidesSharedModule} from './guides-shared.module';


@NgModule({
  imports: [
    CommonModule,
    GuidesRouting,
    RouterModule,
    GuidesSharedModule,
  ],
  declarations: [
    GuidesListComponent,
    GuidesListPresentationComponent,
    GuideItemComponent,
    GuideItemPresentationComponent
  ],
  providers: [
    GuidesResolver,
  ]
})
export class GuidesModule {}

