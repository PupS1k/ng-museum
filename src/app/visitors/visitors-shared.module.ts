import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {VisitorsListComponent} from './components/visitors-list/visitors-list.component';
import {VisitorsListPresentationComponent} from './components/visitors-list-presentation/visitors-list-presentation.component';
import {VisitorItemComponent} from './components/visitor-item/visitor-item.component';
import {LayoutModule} from '../layout/layout.module';
import {VisitorItemPresentationComponent} from './components/visitor-item-presentation/visitor-item-presentation.component';
import {ToursSharedModule} from '../tours/tours-shared.module';
import {VisitorEditComponent} from './components/visitor-edit/visitor-edit.component';
import {EffectsModule} from '@ngrx/effects';
import {VisitorEffects} from './store/visitor.effects';
import {VisitorsGuard} from './services/visitors-guard.service';
import {VisitorGuard} from './services/visitor-guard.service';
import {VisitorEditPresentationComponent} from './components/visitor-edit-presentation/visitor-edit-presentation.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    ToursSharedModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([VisitorEffects])
  ],
  declarations: [
    VisitorsListComponent,
    VisitorsListPresentationComponent,
    VisitorItemPresentationComponent,
    VisitorItemComponent,
    VisitorEditComponent,
    VisitorEditPresentationComponent
  ],
  exports: [
    VisitorsListComponent,
    VisitorsListPresentationComponent,
    VisitorItemPresentationComponent,
    VisitorItemComponent,
    VisitorEditComponent,
    VisitorEditPresentationComponent
  ],
  providers: [
    VisitorsGuard,
    VisitorGuard
  ]
})
export class VisitorsSharedModule {}
