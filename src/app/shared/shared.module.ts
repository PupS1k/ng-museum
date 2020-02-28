import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {AlertComponent} from './components/alert/alert.component';
import {RoleDirective} from './directives/role.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SpinnerComponent,
    AlertComponent,
    RoleDirective
  ],
  exports: [
    SpinnerComponent,
    AlertComponent,
    RoleDirective
  ]
})
export class SharedModule {
}
