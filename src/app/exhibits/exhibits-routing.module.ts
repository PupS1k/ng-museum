import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExhibitDetailsSmartComponent} from './components/exhibit-details/exhibit-details-smart.component';
import {ExhibitsComponent} from './components/exhibits/exhibits.component';
import {ExhibitEditSmartComponent} from './components/exhibit-edit/exhibit-edit-smart.component';
import {ExhibitComponent} from './components/exhibit/exhibit.component';
import {ExhibitGuard} from './services/exhibit-guard.service';
import {ExhibitsGuard} from './services/exhibits-guard.service';

const exhibitsRoutes: Routes = [
  {path: '', component: ExhibitsComponent, canActivate: [ExhibitsGuard]},
  {
    path: ':id', component: ExhibitComponent, canActivate: [ExhibitGuard], children: [
      {path: '', component: ExhibitDetailsSmartComponent},
      {path: 'edit', component: ExhibitEditSmartComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(exhibitsRoutes)]
})

export class ExhibitsRouting {}
