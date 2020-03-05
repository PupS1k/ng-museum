import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {VisitorsRouting} from './visitors-routing.module';
import {VisitorsListComponent} from './components/visitors-list/visitors-list.component';
import {VisitorsListPresentationComponent} from './components/visitors-list-presentation/visitors-list-presentation.component';
import {VisitorItemComponent} from './components/visitor-item/visitor-item.component';
import {SharedModule} from '../shared/shared.module';
import {VisitorsResolver} from './services/visitors-resolver.service';
import {VisitorItemPresentationComponent} from './components/visitor-item-presentation/visitor-item-presentation.component';
import {AuthSharedModule} from '../auth/auth-shared.module';
import {ToursSharedModule} from '../tours/tours-shared.module';
import {VisitorsSharedModule} from './visitors-shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    VisitorsRouting,
    AuthSharedModule,
    VisitorsSharedModule,
    SharedModule,
    ToursSharedModule
  ],
  declarations: [
    VisitorsListComponent,
    VisitorsListPresentationComponent,
    VisitorItemPresentationComponent,
    VisitorItemComponent
  ],
  providers: [
    VisitorsResolver,
  ]
})
export class VisitorsModule {}
