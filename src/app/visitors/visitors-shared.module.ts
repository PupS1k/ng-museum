import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VisitorEditComponent} from './components/visitor-edit/visitor-edit.component';
import {ToursSharedModule} from '../tours/tours-shared.module';
import {AuthSharedModule} from '../auth/auth-shared.module';
import {VisitorResolver} from './services/visitor-resolver.service';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {VisitorEffects} from './store/visitor.effects';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToursSharedModule,
    AuthSharedModule,
    EffectsModule.forFeature([VisitorEffects])
  ],
  declarations: [
    VisitorEditComponent
  ],
  exports: [
    VisitorEditComponent
  ],
  providers: [
    VisitorResolver
  ]
})
export class VisitorsSharedModule {}
