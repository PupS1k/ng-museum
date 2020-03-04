import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {SharedModule} from '../shared/shared.module';
import {GuidesListComponent} from './components/guides-list/guides-list.component';
import {GuidesListPresentationComponent} from './components/guides-list-presentation/guides-list-presentation.component';
import {GuideItemComponent} from './components/guide-item/guide-item.component';
import {GuideEditComponent} from './components/guide-edit/guide-edit.component';
import {GuideEditPresentationComponent} from './components/guide-edit-presentation/guide-edit-presentation.component';
import {GuideItemPresentationComponent} from './components/guide-item-presentation/guide-item-presentation.component';
import {GuidesService} from './services/guides.service';
import {GuidesResolverService} from './services/guides-resolver.service';
import {GuideResolverService} from './services/guide-resolver.service';
import {GuidesRoutingModule} from './guides-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GuidesRoutingModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    GuidesListComponent,
    GuidesListPresentationComponent,
    GuideItemComponent,
    GuideEditComponent,
    GuideEditPresentationComponent,
    GuideItemPresentationComponent
  ],
  providers: [
    GuidesService,
    GuidesResolverService,
    GuideResolverService
  ]
})
export class GuidesModule {}

