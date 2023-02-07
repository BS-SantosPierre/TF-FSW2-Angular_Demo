import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts-show',
  templateUrl: './posts-show.component.html',
  styleUrls: ['./posts-show.component.scss']
})
export class PostsShowComponent implements OnInit {
	post?: Post

	constructor(
		private _postsService: PostsService,
		private _activatedRoute: ActivatedRoute, // Récupère les infos de l'url, notamment les params
		private _router: Router // Accès aux outils de navigation
	){}

	ngOnInit(): void {
		// On accède aux paramètre de l'url
		const id = this._activatedRoute.snapshot.params['id'];
		// PARAMS URL TOUJOURS AU FORMAT STRING
		this.post = this._postsService.getOne(parseInt(id));
		// this.post = this._postsService.getOne(+id);

		// Si le post est undefined, redirige l'utilisateur
		if (!this.post) {
			this._router.navigate(['/posts']);
		}
	}
}
