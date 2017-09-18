import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
  // HOME
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeTitleComponent } from './components/home/home-title/home-title.component';
import { VerifyComponent } from './components/verify/verify.component';
  // ABOUT
import { AboutComponent } from './components/about/about.component';
  // MAIN
import { MainComponent } from './components/main/main.component';
    // LEFT
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
    // MID
import { TeamsComponent } from './components/teams/teams.component';
import { TeamsListComponent } from './components/teams/teams-list/teams-list.component';
import { TeamsListItemComponent } from './components/teams/teams-list-item/teams-list-item.component';
import { TeamsDetailComponent } from './components/teams/teams-detail/teams-detail.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayersListComponent } from './components/players/players-list/players-list.component';
import { PlayersListItemComponent } from './components/players/players-list-item/players-list-item.component';
import { PlayersDetailComponent } from './components/players/players-detail/players-detail.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { NewsfeedListComponent } from './components/newsfeed/newsfeed-list/newsfeed-list.component';
import { NewsfeedItemComponent } from './components/newsfeed/newsfeed-item/newsfeed-item.component';
import { NewsfeedDetailComponent } from './components/newsfeed/newsfeed-detail/newsfeed-detail.component';
import { NewsfeedNewComponent } from './components/newsfeed/newsfeed-new/newsfeed-new.component';
// RIGHT
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { FriendsListComponent } from './components/user/friends-list/friends-list.component';
import { FriendsListItemComponent } from './components/user/friends-list-item/friends-list-item.component';
import { SettingsComponent } from './components/user/settings/settings.component';
import { ChatComponent } from './components/user/chat/chat.component';

// ROUTES
import { AppRoutingModule } from './app-routing.module';
// SERVICES
import { PlayerService } from './services/player.service';
import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
// GUARDS
// import { AuthGuard } from './guards/authgard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
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
    UserProfileComponent,
    SettingsComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    HomeTitleComponent,
    VerifyComponent,
    NewsfeedNewComponent,
    NewsfeedDetailComponent,
    PlayersComponent,
    PlayersListComponent,
    PlayersListItemComponent,
    PlayersDetailComponent,
    TeamsListComponent,
    TeamsListItemComponent,
    TeamsDetailComponent,
    TeamsComponent
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
