import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    LayoutModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
