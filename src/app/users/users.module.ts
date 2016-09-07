import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { usersRouterConfig } from './users.routes';
import { UsersService } from './users.service';
import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';

@NgModule({
  imports: [
    RouterModule.forChild(usersRouterConfig),
    CommonModule,
    HttpModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    UsersComponent
  ],
  declarations: [
    UsersComponent,
    UserFormComponent
  ],
  providers: [ UsersService ]
})
export class UsersModule {

}
