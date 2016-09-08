import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { postsRouterConfig } from './posts.routes';
import { PostsService } from './posts.service';
import { SpinnerComponent } from '../shared/spinner.component';
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
    PostsComponent
  ],
  providers: [ PostsService ]
})
export class PostsModule {

}
