import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth/services/auth.service';
import {SharedModule} from './shared/shared.module';
import {ExhibitsSharedModule} from './exhibits/exhibits-shared.module';
import {LayoutModule} from './layout/layout.module';
import {ToursComponent} from './tours/components/tours.component';
import {ToursPresentationComponent} from './tours/components/tours-presentation/tours-presentation.component';
import {TourItemComponent} from './tours/components/tour-item/tour-item.component';
import {ExhibitsService} from './exhibits/services/exhibits.service';
import {AuthInterceptorService} from './core/services/auth.interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToursComponent,
    ToursPresentationComponent,
    TourItemComponent,
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
    ExhibitsService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
