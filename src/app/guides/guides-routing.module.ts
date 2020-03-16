import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuidesListComponent} from './components/guides-list/guides-list.component';
import {GuideEditComponent} from './components/guide-edit/guide-edit.component';
import {GuidesGuard} from './services/guides-guard.service';
import {GuideGuard} from './services/guide-guard.service';


const guidesRoutes: Routes = [
  {path: '', component: GuidesListComponent, canActivate: [GuidesGuard]},
  {path: ':id/edit', component: GuideEditComponent, canActivate: [GuideGuard]},
  {path: 'create', component: GuideEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(guidesRoutes)],
  exports: [RouterModule]
})
export class GuidesRouting {}
