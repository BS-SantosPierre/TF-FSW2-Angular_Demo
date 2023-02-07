import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
		private _activatedRoute: ActivatedRoute
	){}

	ngOnInit(): void {
		// On accède aux paramètre de l'url
		const id = this._activatedRoute.snapshot.params['id'];
		// PARAMS URL TOUJOURS AU FORMAT STRING
		this.post = this._postsService.getOne(parseInt(id));
		// this.post = this._postsService.getOne(+id);
		console.log(this.post);
	}
}
