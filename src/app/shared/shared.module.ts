import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './pipes/time.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
		TimePipe,
  	NavbarComponent
	],
  imports: [
    CommonModule,
		RouterModule
  ],
	exports: [
		TimePipe,
		NavbarComponent
	]
})
export class SharedModule { }
