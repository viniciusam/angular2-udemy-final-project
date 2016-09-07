import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar.component';

import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig),
    HomeModule,
    UsersModule,
    PostsModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    NavBarComponent
  ]
})
export class AppModule {

}
