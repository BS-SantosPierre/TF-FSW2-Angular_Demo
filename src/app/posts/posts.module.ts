import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsShowComponent } from './pages/posts-show/posts-show.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostsCreateComponent } from './pages/posts-create/posts-create.component';
import { PostsLayoutComponent } from './layouts/posts-layout/posts-layout.component';


@NgModule({
  declarations: [
    PostsShowComponent,
    PostsListComponent,
    PostsCreateComponent,
    PostsLayoutComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
