import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ExhibitsComponent } from './exhibits/components/exhibits.component';
import { ExhibitListComponent } from './exhibits/components/exhibit-list/exhibit-list.component';
import { ExhibitItemComponent } from './exhibits/components/exhibit-item/exhibit-item.component';
import { ExhibitsService } from './exhibits/services/exhibits.service';
import { LoginComponent } from './auth/components/login/login.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { ExhibitListPresentationComponent } from './exhibits/components/exhibit-list-presentation/exhibit-list-presentation.component';
import { LoginPresentationComponent } from './auth/components/login-presentation/login-presentation.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SignUpPresentationComponent } from './auth/components/sign-up-presentation/sign-up-presentation.component';
import {AuthService} from './auth/services/auth.service';
import { ExhibitCardComponent } from './exhibits/components/exhibit-card/exhibit-card.component';
import {RoleDirective} from './core/directives/role.directive';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
// import {LoginInterceptorService} from './login/services/login.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ExhibitsComponent,
    ExhibitListComponent,
    ExhibitItemComponent,
    LoginComponent,
    SignUpComponent,
    ExhibitListPresentationComponent,
    LoginPresentationComponent,
    SignUpPresentationComponent,
    ExhibitCardComponent,
    RoleDirective,
    RoleDirective,
    FooterComponent,
    SpinnerComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ExhibitsService, AuthService/*, {provide: HTTP_INTERCEPTORS, useClass: LoginInterceptorService, multi: true}*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
