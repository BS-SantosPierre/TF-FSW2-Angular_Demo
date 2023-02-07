import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsLayoutComponent } from './posts/layouts/posts-layout/posts-layout.component';
import { BasicLayoutComponent } from './shared/basic-layout/basic-layout.component';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', component: HomeComponent },
	{ path: 'redirect', redirectTo: '/posts' },
	{ path: 'exos',
		component: BasicLayoutComponent,
		loadChildren:() => import('./exos/exos.module').then(m => m.ExosModule)
	},
	{ path: 'demos',
		component: BasicLayoutComponent,
		loadChildren:() => import('./demos/demos.module').then(m => m.DemosModule)
	},
	{ path: 'posts',
		component: PostsLayoutComponent,
		loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
	},
	{ path: "**", component:  NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
