import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo1Component } from './exo1/exo1.component';
import { ChronoComponent } from './exo2/chrono/chrono.component';
import { Exo3Component } from './exo3/exo3.component';
import { Exo4Component } from './exo4/exo4.component';
import { Exo5Component } from './exo5/exo5.component';
import { Exo6Component } from './exo6/exo6.component';

const routes: Routes = [
	{ path: 'exo1', component: Exo1Component },
	{ path: 'exo2', component: ChronoComponent },
	{ path: 'exo3', component: Exo3Component },
	{ path: 'exo4', component: Exo4Component },
	{ path: 'exo5', component: Exo5Component },
	{ path: 'exo6', component: Exo6Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }
