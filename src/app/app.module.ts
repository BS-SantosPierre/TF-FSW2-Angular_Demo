import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemosModule } from './demos/demos.module';
import { ExosModule } from './exos/exos.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		SharedModule,
    DemosModule,
		ExosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
