import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExhibitDetailsComponent} from './components/exhibit-details/exhibit-details.component';
import {ExhibitsComponent} from './components/exhibits/exhibits.component';
import {ExhibitEditComponent} from './components/exhibit-edit/exhibit-edit.component';
import {ExhibitComponent} from './components/exhibit/exhibit.component';
import {ExhibitGuard} from './services/exhibit-guard.service';
import {ExhibitsGuard} from './services/exhibits-guard.service';

const exhibitsRoutes: Routes = [
  {path: '', component: ExhibitsComponent, canActivate: [ExhibitsGuard]},
  {
    path: ':id', component: ExhibitComponent, canActivate: [ExhibitGuard], children: [
      {path: '', component: ExhibitDetailsComponent},
      {path: 'edit', component: ExhibitEditComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(exhibitsRoutes)],
  exports: [RouterModule]
})

export class ExhibitsRouting {

}
