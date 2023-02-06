import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { Exo1Component } from './exo1/exo1.component';
import { Exo3Component } from './exo3/exo3.component';
import { ChronoComponent } from './exo2/chrono/chrono.component';
import { Exo4Component } from './exo4/exo4.component';
import { Exo5Component } from './exo5/exo5.component';
import { InputComponent } from './exo1/input/input.component';
import { UserInfoComponent } from './exo1/user-info/user-info.component';
import { SharedModule } from '../shared/shared.module';
import { Exo6ServiceComponent } from './exo6-service/exo6-service.component';
import { BookServiceComponent } from './exo6-service/book/book-service.component';
import { BookComponent } from './exo6/book/book.component';
import { Exo6Component } from './exo6/exo6.component';


@NgModule({
  declarations: [
		Exo1Component,
		ChronoComponent,
		Exo3Component,
		Exo4Component,
		Exo5Component,
		InputComponent,
    UserInfoComponent,
		BookComponent,
		Exo6Component,
		Exo6ServiceComponent,
		BookServiceComponent
	],
  imports: [
    CommonModule,
    ExosRoutingModule,
		SharedModule
  ]
})
export class ExosModule { }
