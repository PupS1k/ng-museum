import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToursSharedModule} from '../tours/tours-shared.module';
import {GuideEditComponent} from './components/guide-edit/guide-edit.component';
import {GuideEditPresentationComponent} from './components/guide-edit-presentation/guide-edit-presentation.component';
import {GuideResolver} from './services/guide-resolver.service';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {GuideEffects} from './store/guide.effects';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToursSharedModule,
    EffectsModule.forFeature([GuideEffects])
  ],
  declarations: [
    GuideEditComponent,
    GuideEditPresentationComponent
  ],
  exports: [
    GuideEditComponent,
    GuideEditPresentationComponent
  ],
  providers: [
    GuideResolver
  ]
})
export class GuidesSharedModule {

}
