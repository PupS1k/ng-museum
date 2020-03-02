import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthService} from './auth/services/auth.service';
import {SharedModule} from './shared/shared.module';
import {ExhibitsSharedModule} from './exhibits/exhibits-shared.module';
import {LayoutModule} from './layout/layout.module';
import {CoreModule} from './core/core.module';
import {ToursService} from './tours/service/tours.service';
import {ToursSharedModule} from './tours/tours-shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    SharedModule,
    ExhibitsSharedModule,
    ToursSharedModule,
    LayoutModule,
    CoreModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
