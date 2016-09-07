import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { postsRouterConfig } from './posts.routes';
import { PostsComponent } from './posts.component';

@NgModule({
  imports: [
    RouterModule.forChild(postsRouterConfig)
  ],
  bootstrap: [
    PostsComponent
  ],
  declarations: [
    PostsComponent
  ]
})
export class PostsModule {

}
