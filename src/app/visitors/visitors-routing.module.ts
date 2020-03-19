import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {VisitorsListSmartComponent} from './components/visitors-list/visitors-list-smart.component';
import {VisitorEditSmartComponent} from './components/visitor-edit/visitor-edit-smart.component';
import {VisitorsGuard} from './services/visitors-guard.service';
import {VisitorGuard} from './services/visitor-guard.service';


const visitorsRoutes: Routes = [
  {path: '', component: VisitorsListSmartComponent, canActivate: [VisitorsGuard]},
  {path: ':id/edit', component: VisitorEditSmartComponent, canActivate: [VisitorGuard]},
  {path: 'create', component: VisitorEditSmartComponent}
];


@NgModule({
  imports: [RouterModule.forChild(visitorsRoutes)],
})
export class VisitorsRouting {
}
