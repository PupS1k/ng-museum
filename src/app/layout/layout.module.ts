import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ]
})
export class LayoutModule {
}
