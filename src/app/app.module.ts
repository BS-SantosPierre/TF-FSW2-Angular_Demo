import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './exos/exo1/input/input.component';
import { UserInfoComponent } from './exos/exo1/user-info/user-info.component';
import { Exo1Component } from './exos/exo1/exo1.component';
import { ChronoComponent } from './exos/exo2/chrono/chrono.component';
import { TimePipe } from './exos/pipes/time.pipe';
import { FormsModule } from '@angular/forms';
import { Exo5Component } from './exos/exo5/exo5.component';
import { Exo3Component } from './exos/exo3/exo3.component';
import { Exo4Component } from './exos/exo4/exo4.component';
import { DemosModule } from './demos/demos.module';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    UserInfoComponent,
    Exo1Component,
    ChronoComponent,
    TimePipe,
    Exo5Component,
    Exo3Component,
    Exo4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
