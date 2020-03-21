import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DynamicComponent} from './components/common/dynamic/dynamic.component';
import { MainSiteComponent } from './components/sites/main-site/main-site.component';
import { GameSiteComponent } from './components/sites/game-site/game-site.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    MainSiteComponent,
    GameSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
