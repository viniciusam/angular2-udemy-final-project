import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AppValidators } from '../shared/app-validators';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
    selector: 'add-user-form',
    templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

    user: User = new User();
    form: FormGroup;

    title: String;
    isSaving = false;

    constructor(fb: FormBuilder,
                private _router: Router,
                private _currentRoute: ActivatedRoute,
                private _userService: UsersService) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', AppValidators.email],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }

    ngOnInit() {
        // Verify if the route has the id parameter, then try to find the user.
        this._currentRoute.params.subscribe(params => {
            var id = params['id'];
            if (!id) {
                this.title = "Add User";
            } else {
                this.title = "Edit User";
                this._userService.getUser(id)
                    .subscribe(res => {
                        this.user = res;
                    });
            }

        });
    }

    save() {
        this.isSaving = true;
        var srvCall;
        
        if (this.user.id)
            srvCall = this._userService.updateUser(this.user);
        else
            srvCall = this._userService.addUser(this.user);
        
        // TODO: Error handling.
        srvCall.subscribe(
            res => {
                this.form.markAsPristine();
                this._router.navigate(['users']);
            },
            () => {
                this.isSaving = false;
            }
        );
    }

    // TODO: Implement dirty-checking.
    // TODO: Use bootstrap alert class to show errors.

}
