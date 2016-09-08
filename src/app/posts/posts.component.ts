import { Component, OnInit } from '@angular/core';

import { PostsService } from './posts.service';
import { Post } from './post';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  posts: Post[];

  isLoading = false;
  selected: Post;

  constructor(private _postsService: PostsService) {

  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.isLoading = true;
    this._postsService.getPosts().subscribe(
      res => {
        this.posts = res;
      },
      null,
      () => {
        this.isLoading = false;
      });
  }

  select(post: Post) {
    this.selected = post;
  }

}
