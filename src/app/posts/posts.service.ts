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

    getPosts() : Observable<Post[]> {
        return this._http.get(this._baseUrl)
            .map(res => res.json());
    }

    getComments(post: Post) : Observable<Comment[]> {
        return this._http.get(this._baseUrl + "/" + post.id + "/comments")
            .map(res => res.json());
    }

}