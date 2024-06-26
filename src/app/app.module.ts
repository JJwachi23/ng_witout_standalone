import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { MaxMinMeterComponent } from './components/max-min-meter/max-min-meter.component';
import { SquareFlexComponent } from './components/square-flex/square-flex.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    MaxMinMeterComponent,
    SquareFlexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
