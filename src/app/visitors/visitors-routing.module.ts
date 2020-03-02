import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {VisitorsComponent} from './components/visitors.component';
import {VisitorsListComponent} from './components/visitors-list/visitors-list.component';
import {VisitorsResolverService} from './services/visitors-resolver.service';
import {VisitorResolverService} from './services/visitor-resolver.service';
import {VisitorEditComponent} from './components/visitor-edit/visitor-edit.component';


const visitorsRoutes: Routes = [
  {path: '', component: VisitorsComponent, children: [
      {path: '', component: VisitorsListComponent, resolve: {visitors: VisitorsResolverService}},
      {path: ':id/edit', component: VisitorEditComponent, resolve: {visitor: VisitorResolverService}}
    ]}
];


@NgModule({
  imports: [RouterModule.forChild(visitorsRoutes)],
  exports: [RouterModule]
})
export class VisitorsRoutingModule {}
