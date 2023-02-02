import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demos/demo1/demo1.component';
import { InputComponent } from './exos/exo1/input/input.component';
import { UserInfoComponent } from './exos/exo1/user-info/user-info.component';
import { Exo1Component } from './exos/exo1/exo1.component';
import { Demo2Component } from './demos/demo2/demo2.component';
import { Demo3Component } from './demos/demo3/demo3.component';
import { ToTemperaturePipe } from './demos/pipes/to-temperature.pipe';
import { ChronoComponent } from './exos/exo2/chrono/chrono.component';
import { TimePipe } from './exos/pipes/time.pipe';
import { Demo4Component } from './demos/demo4/demo4.component';
import { Demo5Component } from './demos/demo5/demo5.component';
import { FormsModule } from '@angular/forms';
import { Exo5Component } from './exos/exo5/exo5.component';
import { Exo3Component } from './exos/exo3/exo3.component';
import { Exo4Component } from './exos/exo4/exo4.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    InputComponent,
    UserInfoComponent,
    Exo1Component,
    Demo2Component,
    Demo3Component,
    ToTemperaturePipe,
    ChronoComponent,
    TimePipe,
    Demo4Component,
    Demo5Component,
    Exo5Component,
    Exo3Component,
    Exo4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
