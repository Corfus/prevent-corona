import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainSiteComponent} from './components/sites/main-site/main-site.component';
import {GameSiteComponent} from './components/sites/game-site/game-site.component';
import {DevViewComponent} from './dev-view/dev-view.component';

const routes: Routes = [{
  path: '',
  component: MainSiteComponent,
  pathMatch: 'full'
}, {
  path: 'game',
  component: GameSiteComponent,
}, {
  path: 'dev',
  component: DevViewComponent,
}, {
  path: '**',
  redirectTo: '/a',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
