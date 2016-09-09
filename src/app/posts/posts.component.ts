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
  paginatedPosts: Post[];
  selectedPost: Post;
  comments: Comment[];

  postsLoading: boolean;
  commentsLoading: boolean;

  constructor(private _postsService: PostsService,
              private _usersService: UsersService) {
  }

  ngOnInit() {
    this.loadUsers();
    this.loadPosts();
  }

  onPageChanged(e) {
    this.paginatedPosts = e.items;
  }

  selectUser(filter) {
    this.selectedPost = null;
    this.comments = null;
    this.loadPosts(filter);
  }

  selectPost(post: Post) {
    this.selectedPost = post;
    this.comments = null;
    this.loadComments(post);
  }

  private loadUsers() {
    this._usersService.getUsers().subscribe(
      res => {
        this.users = res;
      }
    );
  }

  private loadPosts(filter?) {
    this.postsLoading = true;
    this._postsService.getPosts(filter).subscribe(
      res => {
        this.posts = res;
      },
      null,
      () => {
        this.postsLoading = false;
      });
  }

  private loadComments(post: Post) {
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
