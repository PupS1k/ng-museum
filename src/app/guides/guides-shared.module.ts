import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToursSharedModule} from '../tours/tours-shared.module';
import {GuideEditComponent} from './components/guide-edit/guide-edit.component';
import {GuideEditPresentationComponent} from './components/guide-edit-presentation/guide-edit-presentation.component';
import {GuideResolver} from './services/guide-resolver.service';
import {GuidesService} from './services/guides.service';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToursSharedModule,
    SharedModule
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
    GuideResolver,
    GuidesService
  ]
})
export class GuidesSharedModule {

}
