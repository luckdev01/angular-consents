import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './modules/app-routing.module';
import { AngularMaterialModule } from './modules/angular-material.module';

import { AppComponent } from './app.component';
import { GiveConsentComponent } from './views/give-consent/give-consent.component';
import { CollectedConsentsComponent } from './views/collected-consents/collected-consents.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers, effects } from './+store/app.states';
import { environment } from '../environments/environment';
import { ConsentFacade } from './+store/consent/consent.facade';

@NgModule({
  declarations: [
    AppComponent,
    GiveConsentComponent,
    CollectedConsentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true
      }
    }),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [ConsentFacade],
  bootstrap: [AppComponent]
})
export class AppModule {}
