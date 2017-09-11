import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { FooterComponent } from './components/footer/footer.component';
import { FriendsListComponent } from './components/player/friends-list/friends-list.component';
import { FriendsListItemComponent } from './components/player/friends-list-item/friends-list-item.component';
import { PlayerProfileComponent } from './components/player/player-profile/player-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './components/player/settings/settings.component';
import { ChatComponent } from './components/player/chat/chat.component';
import { PlayerService } from './services/player.service';



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
    HeaderComponent,
    FooterComponent,
    FriendsListComponent,
    FriendsListItemComponent,
    PlayerProfileComponent,
    SettingsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
