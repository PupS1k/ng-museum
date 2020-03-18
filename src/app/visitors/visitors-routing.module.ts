import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {VisitorsListComponent} from './components/visitors-list/visitors-list.component';
import {VisitorEditComponent} from './components/visitor-edit/visitor-edit.component';
import {VisitorsGuard} from './services/visitors-guard.service';
import {VisitorGuard} from './services/visitor-guard.service';


const visitorsRoutes: Routes = [
  {path: '', component: VisitorsListComponent, canActivate: [VisitorsGuard]},
  {path: ':id/edit', component: VisitorEditComponent, canActivate: [VisitorGuard]},
  {path: 'create', component: VisitorEditComponent}
];


@NgModule({
  imports: [RouterModule.forChild(visitorsRoutes)],
})
export class VisitorsRouting {
}
