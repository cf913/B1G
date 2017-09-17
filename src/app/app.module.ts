import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// COMPONENTS
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
import { SettingsComponent } from './components/player/settings/settings.component';
import { ChatComponent } from './components/player/chat/chat.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeTitleComponent } from './components/home/home-title/home-title.component';
// ROUTES
import { AppRoutingModule } from './app-routing.module';
// SERVICES
import { PlayerService } from './services/player.service';
import { PostService } from './services/post.service';
// GUARDS
// import { AuthGuard } from './guards/authgard';

import { AuthService } from './services/auth.service';
import { VerifyComponent } from './components/verify/verify.component';


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
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    HomeTitleComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PlayerService,
    PostService,
    AuthService
    // AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
