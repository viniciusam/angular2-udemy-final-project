import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';
import { User } from './user';

@Component({
  selector: 'users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  private _users: User[];

  constructor(private _userService: UsersService) {
  }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(
        res => {
          this._users = res;
        });
  }

}
