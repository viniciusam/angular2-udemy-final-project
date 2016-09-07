import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { usersRouterConfig } from './users.routes';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    RouterModule.forChild(usersRouterConfig)
  ],
  bootstrap: [
    UsersComponent
  ],
  declarations: [
    UsersComponent
  ]
})
export class UsersModule {

}
