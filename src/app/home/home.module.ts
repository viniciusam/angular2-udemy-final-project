import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { homeRouterConfig } from './home.routes';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild(homeRouterConfig)
  ],
  bootstrap: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {

}
