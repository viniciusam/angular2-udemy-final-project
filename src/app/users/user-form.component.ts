import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from './user';
import { AppValidators } from '../shared/app-validators';

@Component({
    selector: 'add-user-form',
    templateUrl: './user-form.component.html'
})
export class UserFormComponent {

    user: User;
    form: FormGroup;

    constructor(fb: FormBuilder) {
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
}
