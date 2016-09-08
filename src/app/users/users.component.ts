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

  deleteUser(user: User) {
    if (confirm("Are you sure?")) {
      var userIndex = this._users.indexOf(user);
      this._users.splice(userIndex, 1);

      this._userService.deleteUser(user)
        .subscribe(
          res => {},
          err => {
            // If failed to delete, we add the user again.
            this._users.splice(userIndex, 0, user);
            alert("Failed to remove the user.");
          }
        );
    }
  }

  // TODO: Use bootstrap alert class to show errors.

}
