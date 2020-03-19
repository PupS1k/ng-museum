import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';

import {VisitorsListSmartComponent} from './components/visitors-list/visitors-list-smart.component';
import {VisitorsListPresentationComponent} from './components/visitors-list/visitors-list-presentation.component';
import {VisitorItemSmartComponent} from './components/visitor-item/visitor-item-smart.component';
import {LayoutModule} from '../layout/layout.module';
import {VisitorItemPresentationComponent} from './components/visitor-item/visitor-item-presentation.component';
import {VisitorEditSmartComponent} from './components/visitor-edit/visitor-edit-smart.component';
import {VisitorEffects} from './store/visitor.effects';
import {VisitorsGuard} from './services/visitors-guard.service';
import {VisitorGuard} from './services/visitor-guard.service';
import {VisitorEditPresentationComponent} from './components/visitor-edit/visitor-edit-presentation.component';
import {ApiVisitorsService} from './services/api-visitors.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([VisitorEffects])
  ],
  declarations: [
    VisitorsListSmartComponent,
    VisitorsListPresentationComponent,
    VisitorItemPresentationComponent,
    VisitorItemSmartComponent,
    VisitorEditSmartComponent,
    VisitorEditPresentationComponent
  ],
  exports: [
    VisitorsListSmartComponent,
    VisitorsListPresentationComponent,
    VisitorItemPresentationComponent,
    VisitorItemSmartComponent,
    VisitorEditSmartComponent,
    VisitorEditPresentationComponent
  ],
  providers: [
    VisitorsGuard,
    VisitorGuard,
    ApiVisitorsService
  ]
})
export class VisitorsSharedModule {}
