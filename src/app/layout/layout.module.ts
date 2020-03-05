import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarPresentationComponent } from './components/navbar-presentation/navbar-presentation.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    NavbarPresentationComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent
  ]
})
export class LayoutModule {
}
