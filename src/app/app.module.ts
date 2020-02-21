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
import { LoginComponent } from './login/components/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ExhibitListPresentationComponent } from './exhibits/components/exhibit-list-presentation/exhibit-list-presentation.component';
import { LoginPresentationComponent } from './login/components/login-presentation/login-presentation.component';

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
    LoginPresentationComponent
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ExhibitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
