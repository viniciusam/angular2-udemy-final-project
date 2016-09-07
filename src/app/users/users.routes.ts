import { Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';

export const usersRouterConfig: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: UserFormComponent }
];
