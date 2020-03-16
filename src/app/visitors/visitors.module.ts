import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {VisitorsRouting} from './visitors-routing.module';
import {VisitorsListComponent} from './components/visitors-list/visitors-list.component';
import {VisitorsListPresentationComponent} from './components/visitors-list-presentation/visitors-list-presentation.component';
import {VisitorItemComponent} from './components/visitor-item/visitor-item.component';
import {LayoutModule} from '../layout/layout.module';
import {VisitorItemPresentationComponent} from './components/visitor-item-presentation/visitor-item-presentation.component';
import {AuthSharedModule} from '../auth/auth-shared.module';
import {ToursSharedModule} from '../tours/tours-shared.module';
import {VisitorEditComponent} from './components/visitor-edit/visitor-edit.component';
import {EffectsModule} from '@ngrx/effects';
import {VisitorEffects} from './store/visitor.effects';
import {VisitorsGuard} from './services/visitors-guard.service';
import {VisitorGuard} from './services/visitor-guard.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    VisitorsRouting,
    AuthSharedModule,
    LayoutModule,
    ToursSharedModule,
    EffectsModule.forFeature([VisitorEffects])
  ],
  declarations: [
    VisitorsListComponent,
    VisitorsListPresentationComponent,
    VisitorItemPresentationComponent,
    VisitorItemComponent,
    VisitorEditComponent
  ],
  exports: [
    VisitorsListComponent,
    VisitorsListPresentationComponent,
    VisitorItemPresentationComponent,
    VisitorItemComponent,
    VisitorEditComponent
  ],
  providers: [
    VisitorsGuard,
    VisitorGuard
  ]
})
export class VisitorsModule {}
