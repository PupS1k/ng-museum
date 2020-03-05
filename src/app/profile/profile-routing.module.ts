import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {GuideDataResolver} from './services/guide-data-resolver.service';
import {VisitorDataResolver} from './services/visitor-data-resolver.service';
import {VisitorEditComponent} from '../visitors/components/visitor-edit/visitor-edit.component';
import {GuideEditComponent} from '../guides/components/guide-edit/guide-edit.component';


const profileRoutes: Routes = [
  {path: 'guide/:username', component: GuideEditComponent, resolve: {guide: GuideDataResolver}},
  {path: 'visitor/:username', component: VisitorEditComponent, resolve: {visitor: VisitorDataResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
