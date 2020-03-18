import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';

import {GuidesListSmartComponent} from './components/guides-list/guides-list-smart.component';
import {GuidesListPresentationComponent} from './components/guides-list/guides-list-presentation.component';
import {GuideItemSmartComponent} from './components/guide-item/guide-item-smart.component';
import {GuideItemPresentationComponent} from './components/guide-item/guide-item-presentation.component';
import {GuideEditSmartComponent} from './components/guide-edit/guide-edit-smart.component';
import {GuideEditPresentationComponent} from './components/guide-edit/guide-edit-presentation.component';
import {GuideEffects} from './store/guide.effects';
import {GuideGuard} from './services/guide-guard.service';
import {GuidesGuard} from './services/guides-guard.service';
import {ApiGuidesService} from './services/api-guides.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([GuideEffects])
  ],
  declarations: [
    GuidesListSmartComponent,
    GuidesListPresentationComponent,
    GuideItemSmartComponent,
    GuideEditSmartComponent,
    GuideEditPresentationComponent,
    GuideItemPresentationComponent
  ],
  exports: [
    GuidesListSmartComponent,
    GuidesListPresentationComponent,
    GuideItemSmartComponent,
    GuideEditSmartComponent,
    GuideEditPresentationComponent,
    GuideItemPresentationComponent
  ],
  providers: [
    GuidesGuard,
    GuideGuard,
    ApiGuidesService
  ]
})
export class GuidesSharedModule {}

