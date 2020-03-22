import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainSiteComponent} from './components/sites/main-site/main-site.component';
import {GameSiteComponent} from './components/sites/game-site/game-site.component';
import {EndSiteComponent} from './components/sites/end-site/end-site.component';


const routes: Routes = [{
  path: '',
  component: MainSiteComponent,
  pathMatch: 'full'
}, {
  path: 'game',
  component: GameSiteComponent,
},{
  path: 'end',
  component: EndSiteComponent,
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
