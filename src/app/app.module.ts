import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ExhibitsService } from './exhibits-shared/services/exhibits.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth/services/auth.service';
import {SharedModule} from './shared/shared.module';
import {ExhibitsSharedModule} from './exhibits-shared/exhibits-shared.module';
import {LayoutModule} from './layout/layout.module';
// import {LoginInterceptorService} from './login/services/login.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    SharedModule,
    ExhibitsSharedModule,
    LayoutModule
  ],
  providers: [
    AuthService,
    /*, {provide: HTTP_INTERCEPTORS, useClass: LoginInterceptorService, multi: true}*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
