import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {VisitorsListComponent} from './components/visitors-list/visitors-list.component';
import {VisitorsResolver} from './services/visitors-resolver.service';
import {VisitorResolver} from './services/visitor-resolver.service';
import {VisitorEditComponent} from './components/visitor-edit/visitor-edit.component';


const visitorsRoutes: Routes = [
  {path: '', component: VisitorsListComponent, resolve: {visitors: VisitorsResolver}},
  {path: ':id/edit', component: VisitorEditComponent, resolve: {visitor: VisitorResolver}},
  {path: 'create', component: VisitorEditComponent}
];


@NgModule({
  imports: [RouterModule.forChild(visitorsRoutes)],
  exports: [RouterModule]
})
export class VisitorsRouting {
}
