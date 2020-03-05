import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {VisitorsRoutingModule} from './visitors-routing.module';
import {VisitorsListComponent} from './components/visitors-list/visitors-list.component';
import {VisitorsListPresentationComponent} from './components/visitors-list-presentation/visitors-list-presentation.component';
import {VisitorItemComponent} from './components/visitor-item/visitor-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {VisitorsResolverService} from './services/visitors-resolver.service';
import {VisitorItemPresentationComponent} from './components/visitor-item-presentation/visitor-item-presentation.component';
import {AuthSharedModule} from '../auth/auth-shared.module';
import {ToursSharedModule} from '../tours/tours-shared.module';
import {VisitorsSharedModule} from './visitors-shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    VisitorsRoutingModule,
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
    VisitorsResolverService,
  ]
})
export class VisitorsModule {}
