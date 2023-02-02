import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { ToTemperaturePipe } from './pipes/to-temperature.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    ToTemperaturePipe,
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    FormsModule
  ]
})
export class DemosModule { }
