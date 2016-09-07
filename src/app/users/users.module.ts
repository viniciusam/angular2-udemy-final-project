import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { usersRouterConfig } from './users.routes';
import { UsersService } from './users.service';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    RouterModule.forChild(usersRouterConfig),
    CommonModule,
    HttpModule
  ],
  bootstrap: [
    UsersComponent
  ],
  declarations: [
    UsersComponent
  ],
  providers: [ UsersService ]
})
export class UsersModule {

}
