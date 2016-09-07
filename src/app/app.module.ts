import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig) ],
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent, NavBarComponent, HomeComponent, UsersComponent, PostsComponent ]
})
export class AppModule {

}
