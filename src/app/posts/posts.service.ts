import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConstants } from '../shared/app-constants';
import { Post } from './post';
import { Comment } from './comment';

@Injectable()
export class PostsService {

    private _baseUrl = AppConstants.BASE_URL + "posts"

    constructor(private _http: Http) {
    }

    getPosts(userId) : Observable<Post[]> {
        var url = (userId == 0) ? this._baseUrl : this._baseUrl + "?userId=" + userId;
        return this._http.get(url)
            .map(res => res.json());
    }

    getComments(post: Post) : Observable<Comment[]> {
        return this._http.get(this._baseUrl + "/" + post.id + "/comments")
            .map(res => res.json());
    }

}