import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateUserPresentationComponent} from './components/create-user-presentation/create-user-presentation.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    CreateUserPresentationComponent
  ],
  exports: [
    CreateUserPresentationComponent
  ]
})

export class AuthSharedModule {}
