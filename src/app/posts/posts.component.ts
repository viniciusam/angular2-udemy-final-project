import { Component, OnInit } from '@angular/core';

import { PostsService } from './posts.service';
import { Post } from './post';
import { Comment } from './comment';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  posts: Post[];
  selected: Post;
  comments: Comment[];

  postsLoading = false;
  commentsLoading;

  constructor(private _postsService: PostsService) {

  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsLoading = true;
    this._postsService.getPosts().subscribe(
      res => {
        this.posts = res;
      },
      null,
      () => {
        this.postsLoading = false;
      });
  }

  select(post: Post) {
    this.selected = post;
    this.comments = null;
    this.getComments(post);
  }

  getComments(post: Post) {
    this.commentsLoading = true;
    this._postsService.getComments(post).subscribe(
      res => {
        this.comments = res;
      },
      null,
      () => {
        this.commentsLoading = false;
      });
  }

}
