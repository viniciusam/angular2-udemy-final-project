import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { postsRouterConfig } from './posts.routes';
import { PostsService } from './posts.service';
import { UsersService } from '../users/users.service';
import { SpinnerComponent } from '../shared/spinner.component';
import { PaginationComponent } from '../shared/pagination.component';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    RouterModule.forChild(postsRouterConfig),
    CommonModule,
    RouterModule,
    HttpModule
  ],
  bootstrap: [
    PostsComponent
  ],
  declarations: [
    SpinnerComponent,
    PaginationComponent,
    PostsComponent
  ],
  providers: [ PostsService, UsersService ]
})
export class PostsModule {

}
