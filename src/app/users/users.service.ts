import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UsersService {

    private _baseUrl = "http://jsonplaceholder.typicode.com/"

    constructor(private _http: Http) {
    }

    getUsers() : Observable<User[]> {
        return this._http.get(this._baseUrl + "users")
            .map(res => res.json());
    }

}