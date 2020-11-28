import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './modules/app-routing.module';
import { AngularMaterialModule } from './modules/angular-material.module';

import { AppComponent } from './app.component';
import { GiveConsentComponent } from './views/give-consent/give-consent.component';
import { CollectedConsentsComponent } from './views/collected-consents/collected-consents.component';

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
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
