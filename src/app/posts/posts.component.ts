import { Component, OnInit } from '@angular/core';

import { PostsService } from './posts.service';
import { UsersService } from '../users/users.service';
import { Post } from './post';
import { User } from '../users/user';
import { Comment } from './comment';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  users: User[];
  posts: Post[];
  selectedPost: Post;
  comments: Comment[];

  postsLoading = false;
  commentsLoading;

  constructor(private _postsService: PostsService,
              private _usersService: UsersService) {

  }

  ngOnInit() {
    this.getUsers();
    this.getPosts(0);
  }

  getUsers() {
    this._usersService.getUsers().subscribe(
      res => {
        this.users = res;
      }
    );
  }

  getPosts(userId) {
    this.postsLoading = true;
    this._postsService.getPosts(userId).subscribe(
      res => {
        this.posts = res;
      },
      null,
      () => {
        this.postsLoading = false;
      });
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

  selectUser(id) {
    this.selectedPost = null;
    this.comments = null;
    this.getPosts(id);
  }

  selectPost(post: Post) {
    this.selectedPost = post;
    this.comments = null;
    this.getComments(post);
  }

}
