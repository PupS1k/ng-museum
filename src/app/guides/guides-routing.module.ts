import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuidesListComponent} from './components/guides-list/guides-list.component';
import {GuidesResolverService} from './services/guides-resolver.service';
import {GuideResolverService} from './services/guide-resolver.service';
import {GuideEditComponent} from './components/guide-edit/guide-edit.component';


const guidesRoutes: Routes = [
  {path: '', component: GuidesListComponent, resolve: {guides: GuidesResolverService}},
  {path: ':id/edit', component: GuideEditComponent, resolve: {guide: GuideResolverService}},
  {path: 'create', component: GuideEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(guidesRoutes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule {}
