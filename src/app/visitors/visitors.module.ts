import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {VisitorsRoutingModule} from './visitors-routing.module';
import {VisitorsListComponent} from './components/visitors-list/visitors-list.component';
import {VisitorsComponent} from './components/visitors.component';
import {VisitorsListPresentationComponent} from './components/visitors-list-presentation/visitors-list-presentation.component';
import {VisitorItemComponent} from './components/visitor-item/visitor-item.component';
import {VisitorsService} from './services/visitors.service';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {VisitorEditComponent} from './components/visitor-edit/visitor-edit.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    VisitorsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    VisitorsListComponent,
    VisitorsComponent,
    VisitorsListPresentationComponent,
    VisitorItemComponent,
    VisitorEditComponent
  ],
  providers: [
    VisitorsService
  ]
})
export class VisitorsModule {}
