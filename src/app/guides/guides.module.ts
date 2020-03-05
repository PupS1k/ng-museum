import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
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
    SharedModule
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

