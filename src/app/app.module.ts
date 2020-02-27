import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ExhibitsService } from './exhibits/services/exhibits.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth/services/auth.service';
import { FooterComponent } from './footer/footer.component';
import {SharedModule} from './shared/shared.module';
import {ExhibitsSharedModule} from './exhibits-shared/exhibits-shared.module';
// import {LoginInterceptorService} from './login/services/login.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    SharedModule,
    ExhibitsSharedModule
  ],
  providers: [
    ExhibitsService,
    AuthService,
    /*, {provide: HTTP_INTERCEPTORS, useClass: LoginInterceptorService, multi: true}*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
