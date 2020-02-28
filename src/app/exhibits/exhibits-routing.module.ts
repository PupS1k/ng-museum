import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExhibitDetailsComponent} from './components/exhibit-details/exhibit-details.component';
import {ExhibitsStartComponent} from './components/exhibits-start/exhibits-start.component';
import {ExhibitsResolverService} from '../exhibits-shared/services/exhibits-resolver.service';
import {ExhibitResolverService} from './services/exhibit-resolver.service';
import {ExhibitsComponent} from './components/exhibits.component';

const exhibitsRoutes: Routes = [
  {path: '', component: ExhibitsComponent, children: [
      {path: '', component: ExhibitsStartComponent, resolve: {exhibits: ExhibitsResolverService}},
      {path: ':id', component: ExhibitDetailsComponent, resolve: {exhibit: ExhibitResolverService}},
      // {path: 'exhibits/:id/edit', component:},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(exhibitsRoutes)],
  exports: [RouterModule]
})

export class ExhibitsRoutingModule {

}
