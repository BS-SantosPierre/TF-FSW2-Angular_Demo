import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './pipes/time.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
		TimePipe,
  	NavbarComponent,
   NotFoundComponent,
   BasicLayoutComponent,
   HomeComponent
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
