import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToursSharedModule} from '../tours/tours-shared.module';
import {GuideEditComponent} from './components/guide-edit/guide-edit.component';
import {GuideEditPresentationComponent} from './components/guide-edit-presentation/guide-edit-presentation.component';
import {GuideResolverService} from './services/guide-resolver.service';
import {GuidesService} from './services/guides.service';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToursSharedModule
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
    GuideResolverService,
    GuidesService
  ]
})
export class GuidesSharedModule {

}
