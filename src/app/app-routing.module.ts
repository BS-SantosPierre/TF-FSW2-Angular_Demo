import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemosModule } from './demos/demos.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
