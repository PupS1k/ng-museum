import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {AlertComponent} from './components/alert/alert.component';
import {NavbarSmartComponent} from './components/navbar/navbar-smart.component';
import {NavbarPresentationComponent} from './components/navbar/navbar-presentation.component';
import {FooterComponent} from './components/footer/footer.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RouterModule} from '@angular/router';
import {IconSpriteModule} from 'ng-svg-icon-sprite';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IconSpriteModule
  ],
  declarations: [
    SpinnerComponent,
    AlertComponent,
    NavbarSmartComponent,
    NavbarPresentationComponent,
    FooterComponent,
    NotFoundComponent
  ],
  exports: [
    SpinnerComponent,
    AlertComponent,
    NavbarSmartComponent,
    NavbarPresentationComponent,
    FooterComponent,
    NotFoundComponent
  ]
})
export class LayoutModule {
}
