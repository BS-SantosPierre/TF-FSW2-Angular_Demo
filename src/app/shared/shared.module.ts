import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './pipes/time.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
		TimePipe,
  	NavbarComponent
	],
  imports: [
    CommonModule,
		RouterModule,
		FormsModule
  ],
	exports: [
		TimePipe,
		NavbarComponent,
		FormsModule
	]
})
export class SharedModule { }
