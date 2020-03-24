import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DynamicComponent} from './components/common/dynamic/dynamic.component';
import {MainSiteComponent} from './components/sites/main-site/main-site.component';
import {GameSiteComponent} from './components/sites/game-site/game-site.component';
import {EventDetailsPipe} from './pipes/event-details.pipe';
import {CountryComponent} from './components/common/country/country.component';
import {ImagePathPipe} from './pipes/image-path.pipe';
import {ActionDetailsPipe} from './pipes/action-details.pipe';
import {ActionBarComponent} from './components/common/action-bar/action-bar.component';
import {ActionSpaceComponent} from './components/common/action-space/action-space.component';
import {ImageButtonComponent} from './components/common/image-button/image-button.component';
import {ActionCatalogComponent} from './components/common/action-catalog/action-catalog.component';
import { TwitterBoxComponent } from './components/common/twitter-box/twitter-box.component'
import {StatusValueComponent} from './components/common/status-value/status-value.component';
import {ValueTableComponent} from './components/common/value-table/value-table.component';
import { DatePipe } from './pipes/date.pipe';
import { PolicyListComponent } from './components/common/policy-list/policy-list.component';
import { TimeComponent } from './components/common/time/time.component';
import { PopulationBarComponent } from './components/common/population-bar/population-bar.component';
import { PolicyToIconPipe } from './pipes/policy-to-icon.pipe';
import { EndSiteComponent } from './components/sites/end-site/end-site.component';
import { EndSiteValueComponent } from './components/common/end-site-value/end-site-value.component';
import { ResponsibilitesComponent } from './components/common/responsibilites/responsibilites.component';
import { ResearchStateComponent } from './components/common/research-state/research-state.component';
import { ImageComponent } from './components/common/image/image.component';
import { ActionToImagePipe } from './pipes/action-to-image.pipe';
import { ActionToDescriptionPipe } from './pipes/action-to-description.pipe';
import { ReadablePipe } from './pipes/readable.pipe';

import {DevViewComponent} from './dev-view/dev-view.component';
import {ChartsModule} from 'ng2-charts';
import {LineChartComponent} from './components/common/dev/linechart/linechart.component';
@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    MainSiteComponent,
    GameSiteComponent,
    EventDetailsPipe,
    CountryComponent,
    ImagePathPipe,
    ActionDetailsPipe,
    ActionBarComponent,
    ActionSpaceComponent,
    ImageButtonComponent,
    ActionCatalogComponent,
    StatusValueComponent,
    TwitterBoxComponent,
    ValueTableComponent,
    PolicyListComponent,
    ValueTableComponent,
    DatePipe,
    TimeComponent,
    PopulationBarComponent,
    PolicyToIconPipe,
    ResponsibilitesComponent,
    ResearchStateComponent,
    ImageComponent,
    ActionToImagePipe,
    ActionToDescriptionPipe,
    ReadablePipe,
    EndSiteComponent,
    EndSiteValueComponent,
    DevViewComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
