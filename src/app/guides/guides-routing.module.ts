import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuidesListSmartComponent} from './components/guides-list/guides-list-smart.component';
import {GuideEditSmartComponent} from './components/guide-edit/guide-edit-smart.component';
import {GuidesGuard} from './services/guides-guard.service';
import {GuideGuard} from './services/guide-guard.service';


const guidesRoutes: Routes = [
  {path: '', component: GuidesListSmartComponent, canActivate: [GuidesGuard]},
  {path: ':id/edit', component: GuideEditSmartComponent, canActivate: [GuideGuard]},
  {path: 'create', component: GuideEditSmartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(guidesRoutes)]
})
export class GuidesRouting {}
