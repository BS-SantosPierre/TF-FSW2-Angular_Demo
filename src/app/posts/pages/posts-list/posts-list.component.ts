import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
	posts: Post[] = [];

	constructor(
		private _postsService: PostsService
	){}

	ngOnInit(): void {
		this.posts = this._postsService.getAll();
	}
}
