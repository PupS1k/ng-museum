import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SpinnerComponent} from './spinner/spinner.component';
import {AlertComponent} from './alert/alert.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SpinnerComponent,
    AlertComponent,
  ],
  exports: [
    SpinnerComponent,
    AlertComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}
