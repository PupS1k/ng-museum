import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExhibitDetailsComponent} from './components/exhibit-details/exhibit-details.component';
import {ExhibitsResolverService} from './services/exhibits-resolver.service';
import {ExhibitResolverService} from './services/exhibit-resolver.service';
import {ExhibitsComponent} from './components/exhibits.component';
import {ExhibitEditComponent} from './components/exhibit-edit/exhibit-edit.component';
import {ExhibitComponent} from './components/exhibit/exhibit.component';

const exhibitsRoutes: Routes = [
  {path: '', component: ExhibitsComponent, resolve: {exhibits: ExhibitsResolverService}},
  {
    path: ':id', component: ExhibitComponent, resolve: {exhibit: ExhibitResolverService}, children: [
      {path: '', component: ExhibitDetailsComponent},
      {path: 'edit', component: ExhibitEditComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(exhibitsRoutes)],
  exports: [RouterModule]
})

export class ExhibitsRoutingModule {

}
