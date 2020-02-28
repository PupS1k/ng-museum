import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExhibitDetailsComponent} from './components/exhibit-details/exhibit-details.component';
import {ExhibitsStartComponent} from './components/exhibits-start/exhibits-start.component';
import {ExhibitsResolverService} from './services/exhibits-resolver.service';
import {ExhibitResolverService} from './services/exhibit-resolver.service';
import {ExhibitsComponent} from './components/exhibits.component';
import {ExhibitEditComponent} from './components/exhibit-edit/exhibit-edit.component';

const exhibitsRoutes: Routes = [
  {path: '', component: ExhibitsComponent, children: [
      {path: '', component: ExhibitsStartComponent, resolve: {exhibits: ExhibitsResolverService}},
      {path: ':id', component: ExhibitDetailsComponent, resolve: {exhibit: ExhibitResolverService}},
      {path: ':id/edit', component: ExhibitEditComponent, resolve: {exhibit: ExhibitResolverService}},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(exhibitsRoutes)],
  exports: [RouterModule]
})

export class ExhibitsRoutingModule {

}
