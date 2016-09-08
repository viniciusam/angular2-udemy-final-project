import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class UsersService {

    private _baseUrl = "http://jsonplaceholder.typicode.com/users"

    constructor(private _http: Http) {
    }

    getUsers() : Observable<User[]> {
        return this._http.get(this._baseUrl)
            .map(res => res.json());
    }

    getUser(id) : Observable<User> {
        return this._http.get(this._baseUrl + "/" + id)
            .map(res => res.json());
    }

    addUser(user: User) {
        return this._http.post(this._baseUrl, user)
            .map(res => res.json());
    }

    updateUser(user: User) {
        return this._http.put(this._baseUrl + "/" + user.id, user)
            .map(res => res.json());
    }

    deleteUser(user: User) {
        return this._http.delete(this._baseUrl + "/" + user.id)
            .map(res => res.json());
    }

}