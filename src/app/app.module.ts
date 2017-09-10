import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { MainComponent } from './components/main/main.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { NewsfeedListComponent } from './components/newsfeed/newsfeed-list/newsfeed-list.component';
import { NewsfeedItemComponent } from './components/newsfeed/newsfeed-item/newsfeed-item.component';
import { AboutComponent } from './components/about/about.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { HeaderComponent } from './components/header/header.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'player/:id', component: PlayerComponent},
  {path: 'main', component: MainComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    MainComponent,
    NewsfeedComponent,
    NewsfeedListComponent,
    NewsfeedItemComponent,
    AboutComponent,
    LeftSidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
