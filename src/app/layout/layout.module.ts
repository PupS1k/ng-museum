import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {AlertComponent} from './components/alert/alert.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NavbarPresentationComponent} from './components/navbar-presentation/navbar-presentation.component';
import {FooterComponent} from './components/footer/footer.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SpinnerComponent,
    AlertComponent,
    NavbarComponent,
    NavbarPresentationComponent,
    FooterComponent,
    NotFoundComponent
  ],
  exports: [
    SpinnerComponent,
    AlertComponent,
    NavbarComponent,
    NavbarPresentationComponent,
    FooterComponent,
    NotFoundComponent
  ]
})
export class LayoutModule {
}
