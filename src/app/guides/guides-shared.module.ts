import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';

import {GuidesListComponent} from './components/guides-list/guides-list.component';
import {GuidesListPresentationComponent} from './components/guides-list-presentation/guides-list-presentation.component';
import {GuideItemComponent} from './components/guide-item/guide-item.component';
import {GuideItemPresentationComponent} from './components/guide-item-presentation/guide-item-presentation.component';
import {GuidesRouting} from './guides-routing.module';
import {GuideEditComponent} from './components/guide-edit/guide-edit.component';
import {GuideEditPresentationComponent} from './components/guide-edit-presentation/guide-edit-presentation.component';
import {GuideEffects} from './store/guide.effects';
import {GuideGuard} from './services/guide-guard.service';
import {GuidesGuard} from './services/guides-guard.service';


@NgModule({
  imports: [
    CommonModule,
    GuidesRouting,
    RouterModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([GuideEffects])
  ],
  declarations: [
    GuidesListComponent,
    GuidesListPresentationComponent,
    GuideItemComponent,
    GuideEditComponent,
    GuideEditPresentationComponent,
    GuideItemPresentationComponent
  ],
  exports: [
    GuidesListComponent,
    GuidesListPresentationComponent,
    GuideItemComponent,
    GuideEditComponent,
    GuideEditPresentationComponent,
    GuideItemPresentationComponent
  ],
  providers: [
    GuidesGuard,
    GuideGuard
  ]
})
export class GuidesSharedModule {}

