import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRouting} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {CoreModule} from './core/core.module';
import {appReducer} from './app.reducer';

import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {ExhibitEffects} from './exhibits/store/exhibit.effects';
import {AuthEffects} from './auth/store/auth.effects';
import {GuideEffects} from './guides/store/guide.effects';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    AppRouting,
    ReactiveFormsModule,
    BrowserModule,
    LayoutModule,
    CoreModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([ExhibitEffects, AuthEffects, GuideEffects]),
    StoreDevtoolsModule.instrument({logOnly: environment.production})
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
