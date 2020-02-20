import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ExhibitsComponent } from './exhibits/exhibits.component';
import { ExhibitListComponent } from './exhibits/exhibit-list/exhibit-list.component';
import { ExhibitItemComponent } from './exhibits/exhibit-list/exhibit-item/exhibit-item.component';
import {ExhibitsService} from './exhibits/exhibits.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ExhibitsComponent,
    ExhibitListComponent,
    ExhibitItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [ExhibitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
